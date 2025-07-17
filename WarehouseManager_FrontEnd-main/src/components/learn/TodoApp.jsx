import { useContext } from "react";
import { Card, Row, Col, Statistic, Typography } from "antd";
import { AuthContext } from "../context/auth.context";
import { UsergroupAddOutlined, ShoppingCartOutlined, DollarOutlined, TeamOutlined, CloudUploadOutlined, TruckOutlined } from "@ant-design/icons";

const { Title } = Typography;

const TodoApp = () => {
  const { user } = useContext(AuthContext);
  // Dữ liệu demo, bạn có thể fetch API thực tế nếu muốn
  const stats = {
    accounts: 12,
    products: 120,
    inOrders: 34,
    outOrders: 28,
    revenue: 50000000,
    customers: 45,
  };

  return (
    <div style={{ padding: 32 }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: 32 }}>
        Chào mừng {user?.username ? user.username : "Admin"} đến với hệ thống quản lý kho!
      </Title>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic title="Tài khoản" value={stats.accounts} prefix={<TeamOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic title="Sản phẩm" value={stats.products} prefix={<ShoppingCartOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic title="Khách hàng" value={stats.customers} prefix={<UsergroupAddOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic title="Đơn nhập kho" value={stats.inOrders} prefix={<CloudUploadOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic title="Đơn xuất kho" value={stats.outOrders} prefix={<TruckOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <Statistic title="Doanh thu (VNĐ)" value={stats.revenue.toLocaleString()} prefix={<DollarOutlined />} />
          </Card>
        </Col>
      </Row>
      
    </div>
  );
};

export default TodoApp;