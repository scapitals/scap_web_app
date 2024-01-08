import { AreaChart, Card, Col, Grid, Text, Title } from "@tremor/react"
import { FaUserAlt } from "react-icons/fa"
import { FaUserXmark } from "react-icons/fa6"

const UserHome = () => {
  const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const valueFormatter = function(number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};
  return (
    <div className='container'>
      <p className="text-center">UserHome</p>
      <div className="flex flex-row gap-6 justify-start items-center">
        <div>
          <FaUserAlt />
        </div>
        <div className="flex flex-col">
          <p>Account Plan: Basic</p>
          <div className="flex flex-row gap-4"><p>Unverified: </p><FaUserXmark /></div>
          
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-14 w-full justify-between align-middle">
        <div className="rounded-lg shadow p-4 flex flex-col">
          <h2>Account Balance</h2>
          <p>$20.00</p>
          <div className="flex flex-row gap-4">
            <button className="bg-primary p-2 rounded text-white">Deposit</button>
            <button className="border border-primary p-2 rounded">Withdraw</button>
          </div>
        </div>
        <div className="rounded-lg shadow">
          <h2>Invite a Friend and get bonus</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center">
        <div className="rounded-lg shadow p-4 flex flex-col">
          <h2>Account Balance</h2>
          <p>$20.00</p>
          <div className="flex flex-row gap-4">
            <button className="bg-primary p-2 rounded text-white">Deposit</button>
            <button className="border border-primary p-2 rounded">Withdraw</button>
          </div>
        </div>
        <div className="rounded-lg shadow p-4 flex flex-col">
          <h2>Account Balance</h2>
          <p>$20.00</p>
          <div className="flex flex-row gap-4">
            <button className="bg-primary p-2 rounded text-white">Deposit</button>
            <button className="border border-primary p-2 rounded">Withdraw</button>
          </div>
        </div>
        <div className="rounded-lg shadow p-4 flex flex-col">
          <h2>Account Balance</h2>
          <p>$20.00</p>
          <div className="flex flex-row gap-4">
            <button className="bg-primary p-2 rounded text-white">Deposit</button>
            <button className="border border-primary p-2 rounded">Withdraw</button>
          </div>
        </div>
      </div>
      <div className="w-full py-8">
        <Card>
    <Title>Newsletter revenue over time (USD)</Title>
    <AreaChart
      className="h-72 mt-4"
      data={chartdata}
      index="date"
      categories={["SemiAnalysis", "The Pragmatic Engineer"]}
      colors={["indigo", "cyan"]}
      valueFormatter={valueFormatter}
    />
  </Card>
      </div>
    </div>
  )
}

export default UserHome