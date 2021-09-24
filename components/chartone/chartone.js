import styles from "../../styles/chart.module.css";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";

const ChartOne = () => {
  const [chartData, setChartdata] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState({});
  const [employeeAge, setEmployeeAge] = useState({});

  const chart = () => {
    let empSal = [];
    let empAge = [];

    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.employee_salary));
          empAge.push(parseInt(dataObj.employee_age));
        }
        setChartdata({
          labels: empAge,
          datasets: [
            {
              label: "salary",
              data: empSal,
              backgroundColor: ["black"],
              borderWidth: 4,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(empSal, empAge);
    setChartdata({
      labels: empAge,
      datasets: [
        {
          label: "salary",
          data: empSal,
          backgroundColor: ["black"],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className={styles.bar}>
      <p className={styles.buttontext}> Employee Salary Data </p>
      <div>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default ChartOne;
