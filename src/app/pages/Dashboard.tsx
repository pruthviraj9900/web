import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Progress } from "../components/ui/progress";
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Activity, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { api } from "../lib/api";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function Dashboard() {
  const [stats, setStats] = useState<any>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.getDashboardStats().catch(() => demoStats),
      api.getDashboardProjects().catch(() => ({ projects: demoProjects }))
    ]).then(([statsData, projectsData]) => {
      setStats(statsData);
      setProjects(projectsData.projects);
      setLoading(false);
    });
  }, []);

  const demoStats = {
    revenue: {
      current: 142580,
      previous: 128340,
      change: 11.1
    },
    customers: {
      current: 2847,
      previous: 2654,
      change: 7.3
    },
    orders: {
      current: 1245,
      previous: 1098,
      change: 13.4
    },
    activeUsers: {
      current: 847,
      previous: 923,
      change: -8.2
    }
  };

  const demoProjects = [
    { id: 1, name: "E-commerce Redesign", client: "TechStore Inc", status: "In Progress", progress: 75, dueDate: "2026-06-20", priority: "High" },
    { id: 2, name: "CRM Integration", client: "SalesFlow Co", status: "In Progress", progress: 45, dueDate: "2026-07-05", priority: "Medium" },
    { id: 3, name: "Mobile App MVP", client: "StartupXYZ", status: "Planning", progress: 15, dueDate: "2026-08-15", priority: "High" },
    { id: 4, name: "Dashboard Analytics", client: "DataViz Ltd", status: "Testing", progress: 90, dueDate: "2026-06-10", priority: "Medium" },
    { id: 5, name: "API Development", client: "CloudSync", status: "Completed", progress: 100, dueDate: "2026-05-30", priority: "Low" }
  ];

  const revenueData = [
    { month: "Jan", revenue: 45000, expenses: 32000 },
    { month: "Feb", revenue: 52000, expenses: 35000 },
    { month: "Mar", revenue: 48000, expenses: 33000 },
    { month: "Apr", revenue: 61000, expenses: 38000 },
    { month: "May", revenue: 55000, expenses: 36000 },
    { month: "Jun", revenue: 68000, expenses: 40000 }
  ];

  const projectStatusData = [
    { name: "Completed", value: 35, color: "#22c55e" },
    { name: "In Progress", value: 45, color: "#3b82f6" },
    { name: "Planning", value: 15, color: "#f59e0b" },
    { name: "On Hold", value: 5, color: "#ef4444" }
  ];

  const activityData = [
    { time: "09:00", action: "Project update: E-commerce Redesign", user: "John Doe" },
    { time: "10:30", action: "New client inquiry received", user: "System" },
    { time: "11:45", action: "Meeting scheduled: CRM Integration", user: "Sarah Smith" },
    { time: "13:15", action: "Code review completed", user: "Mike Johnson" },
    { time: "15:00", action: "Invoice sent to TechStore Inc", user: "Finance" },
    { time: "16:30", action: "Project milestone completed", user: "Development Team" }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const statCards = [
    {
      title: "Total Revenue",
      value: `$${stats.revenue.current.toLocaleString()}`,
      change: stats.revenue.change,
      icon: DollarSign,
      color: "text-green-500"
    },
    {
      title: "Total Customers",
      value: stats.customers.current.toLocaleString(),
      change: stats.customers.change,
      icon: Users,
      color: "text-blue-500"
    },
    {
      title: "Total Orders",
      value: stats.orders.current.toLocaleString(),
      change: stats.orders.change,
      icon: ShoppingCart,
      color: "text-purple-500"
    },
    {
      title: "Active Users",
      value: stats.activeUsers.current.toLocaleString(),
      change: stats.activeUsers.change,
      icon: Activity,
      color: "text-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="border-b bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Website
              </Link>
              <h1 className="text-3xl font-bold">Dashboard Demo</h1>
              <p className="text-muted-foreground mt-1">Example of a custom dashboard we can build for you</p>
            </div>
            <Badge variant="secondary" className="text-sm">Demo Data</Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="flex items-center text-sm">
                    {stat.change > 0 ? (
                      <>
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-green-500">+{stat.change}%</span>
                      </>
                    ) : (
                      <>
                        <TrendingDown className="h-4 w-4 text-destructive mr-1" />
                        <span className="text-destructive">{stat.change}%</span>
                      </>
                    )}
                    <span className="text-muted-foreground ml-2">vs last month</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue vs expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="hsl(var(--primary))" />
                    <Bar dataKey="expenses" fill="hsl(var(--muted))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Status Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Project Status Distribution</CardTitle>
                <CardDescription>Current project breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={projectStatusData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {projectStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Projects Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Active Projects</CardTitle>
              <CardDescription>Track your ongoing development projects</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project Name</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Priority</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.name}</TableCell>
                      <TableCell>{project.client}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            project.status === "Completed" ? "default" :
                            project.status === "In Progress" ? "secondary" :
                            "outline"
                          }
                        >
                          {project.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={project.progress} className="w-20" />
                          <span className="text-sm text-muted-foreground">{project.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">{project.dueDate}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            project.priority === "High" ? "destructive" :
                            project.priority === "Medium" ? "secondary" :
                            "outline"
                          }
                        >
                          {project.priority}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>

        {/* Activity Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates and actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activityData.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 pb-4 border-b last:border-0 last:pb-0">
                    <div className="text-sm text-muted-foreground min-w-[60px]">{activity.time}</div>
                    <div className="flex-1">
                      <p className="text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center bg-gradient-to-br from-primary/5 to-accent/10 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Need a Custom Dashboard?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            This is just a demo. We can build custom dashboards tailored to your specific business metrics,
            workflows, and data sources. Real-time data, interactive charts, and powerful analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg">Let's Build Yours</Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline">See More Examples</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
