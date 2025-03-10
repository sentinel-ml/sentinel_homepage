import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

const SentinelDashboard = () => {
  const totalTransactions = 50000;
  const fraudAttempts = 1200;
  const preventionRate = ((1 - fraudAttempts / totalTransactions) * 100).toFixed(2);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Fraud Attempts",
        data: Array.from({ length: 12 }, () => faker.number.int({ min: 50, max: 150 })),
        backgroundColor: "#FF3B30",
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Fraud Detection Dashboard</h1>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Transactions</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">{totalTransactions.toLocaleString()}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fraud Attempts</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold text-red-500">{fraudAttempts.toLocaleString()}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Prevention Rate</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold text-green-400">{preventionRate}%</CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Fraud Attempts Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} height={300} />
        </CardContent>
      </Card>
    </div>
  );
};

export default SentinelDashboard;
