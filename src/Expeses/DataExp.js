import Expenses from "./Expenses";

const DataExp = () => {
  const expenses = [
    {
      title: "Insurance car and Medical",
      amount: 760.0,
      date: new Date(2022, 12, 8)
    },
    {
      title: "School Fee",
      amount: 45.23,
      date: new Date(2022, 12, 9)
    },
    {
      title: "Rent and Utitlty ",
      amount: 450.0,
      date: new Date(2022, 12, 5)
    },
    {
      title: "School Fee",
      amount: 2700.0,
      date: new Date(2022, 12, 8)
    }
  ];

  return <Expenses items={expenses} />;
};
export default DataExp;
