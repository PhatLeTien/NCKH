import React, { useState, useEffect } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Breadcrumb, Layout, Menu, Typography, Table, Modal, Form, Input, Button } from 'antd';
import '../Admin2/DashboardPage.css';
import axios from 'axios';

const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;
const labels = ['Người Dùng', 'Sản Phẩm', 'Đơn Hàng'];


// Đây là danh sách các mục menu cho phần điều hướng bên trái của trang Dashboard. Mỗi mục có một key, icon, và label để xác định và hiển thị trong menu.
const items2 = [
    {
        key: 'sub1',
        icon: <UserOutlined />,
        label: 'Người Dùng',

    },
    {
        key: 'sub2',
        icon: <LaptopOutlined />,
        label: 'Post',
        children: [
            { key: 'sub2-1', label: 'Quản lý tin tức' },
            { key: 'sub2-2', label: 'Loại tin tức' },
        ],
    },
    {
        key: 'sub3',
        icon: <NotificationOutlined />,
        label: 'Đơn Hàng',

    },

];




const DashboardPage = () => {
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [addModalVisible, setAddModalVisible] = useState(false);
    const [recordToEdit, setRecordToEdit] = useState(null);
    const [recordToDelete, setRecordToDelete] = useState(null);
    const [selectedMenuKey, setSelectedMenuKey] = useState('sub1');
    const [dataSource, setDataSource] = useState();
    const [form] = Form.useForm();
    const [user, setUser] = useState([]);
    const [products, setProducts] = useState([]);
    const [category, setCategories] = useState([]);
    const [order, setOrder] = useState([]);


  
    const handleMenuClick = ({ key }) => {
        setSelectedMenuKey(key);
    };
    //Hàm lưu dữ liệu datasource
    useEffect(()=> { 
        switch (selectedMenuKey) {
            case 'sub1':
                setDataSource(user);
                break;
            case 'sub2-1':
                setDataSource(products);
                break;
            case 'sub2-2':
                setDataSource(category);
                break;
            case 'sub3':
                setDataSource(order);
                break;
            default:
                break;
        }
    }, [selectedMenuKey, user, category, products, order]);

    const handleEdit = (record) => {
        setRecordToEdit(record);
        form.setFieldsValue(record);
        setEditModalVisible(true);
    };

    const handleDelete = (record) => {
        setRecordToDelete(record);
        setDeleteModalVisible(true);
    };

    const handleEditModalOk = () => {

    };

    const handleDeleteModalOk = () => {

        setDeleteModalVisible(false);
        setRecordToDelete(null);
    };

    const handleModalCancel = () => {
        setEditModalVisible(false);
        setDeleteModalVisible(false);
        setAddModalVisible(false);
    };

 

    //Thêm loại sản phẩm
   

    const handleAddNewRecord = () => {
        setAddModalVisible(true);
        form.resetFields();
    };

    const handleAddModalOk = () => {

    };

    const userColumns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Age', dataIndex: 'age', key: 'age' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        { title: 'Phone Number', dataIndex: 'phoneNumber', key: 'phoneNumber' },
        {
            title: 'Actions', dataIndex: '', key: 'actions',
            render: (_, record) => (
                <span>
                    <Button type="link" icon={<EditOutlined />} style={{ marginRight: 16 }} onClick={() => handleEdit(record)}>Edit</Button>
                    <Button type="link" icon={<DeleteOutlined />} onClick={() => handleDelete(record)}>Delete</Button>
                </span>
            ),
        },
    ];

    const productColumns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Price', dataIndex: 'price', key: 'price' },
        { title: 'Stock', dataIndex: 'stock', key: 'stock' },
        {
            title: 'Actions', dataIndex: '', key: 'actions',
            render: (_, record) => (
                <span>
                    <Button type="link" icon={<EditOutlined />} style={{ marginRight: 16 }} onClick={() => handleEdit(record)}>Edit</Button>
                    <Button type="link" icon={<DeleteOutlined />} onClick={() => handleDelete(record)}>Delete</Button>
                </span>
            ),
        },
    ];

    const orderColumns = [
        { title: 'Order ID', dataIndex: 'orderId', key: 'orderId' },
        { title: 'Customer', dataIndex: 'customer', key: 'customer' },
        { title: 'Total', dataIndex: 'total', key: 'total' },
        {
            title: 'Actions', dataIndex: '', key: 'actions',
            render: (_, record) => (
                <span>
                    <Button type="link" icon={<EditOutlined />} style={{ marginRight: 16 }} onClick={() => handleEdit(record)}>Edit</Button>
                    <Button type="link" icon={<DeleteOutlined />} onClick={() => handleDelete(record)}>Delete</Button>
                </span>
            ),
        },
    ];

    const CategoryColumns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Loại tin tức',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Actions',
            dataIndex: '',
            key: 'actions',
            render: (_, record) => (
                <span>
                    <Button type="link" icon={<EditOutlined />} style={{ marginRight: 16 }} onClick={() => handleEdit(record)}>Edit</Button>
                    <Button type="link" icon={<DeleteOutlined />} onClick={() => handleDelete(record)}>Delete</Button>
                </span>
            ),
        },
    ];

    //lấy bảng
    const getColumns = () => {
        switch (selectedMenuKey) {
            case 'sub1':
                return userColumns;
            case 'sub2-1':
                return productColumns;
            case 'sub2-2':
                return CategoryColumns;
            case 'sub3':
                return orderColumns;

            default:
                return [];
        }
    };

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ flex: 1, minWidth: 0 }} />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar size="default" icon={<UserOutlined />} alt="User Avatar" style={{ marginRight: 16 }} />
                    <Text style={{ color: '#fff' }}>Lê Tiến Phát</Text>
                </div>
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <Breadcrumb style={{ margin: '16px 0' }} />
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider style={{ background: '#fff' }} width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['sub1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                            items={items2}
                            onClick={handleMenuClick}
                        />
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: '77vh' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
                            <Button type="primary" icon={<PlusOutlined />} onClick={handleAddNewRecord}>
                                Add New
                            </Button>
                        </div>
                        <Table
                            dataSource={dataSource}
                            columns={getColumns()}
                            pagination={false}
                        />
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                PTGAMING ©{new Date().getFullYear()} Created by Ant UED
            </Footer>

            <Modal
                title="Chỉnh sửa người dùng"
                visible={editModalVisible}
                onOk={handleEditModalOk}
                onCancel={handleModalCancel}
            >
                <Form form={form}>
                    <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input the name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="age" label="Age" rules={[{ required: true, message: 'Please input the age!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please input the address!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="phoneNumber" label="Phone Number" rules={[{ required: true, message: 'Please input the phone number!' }]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title="Xóa người dùng"
                visible={deleteModalVisible}
                onOk={handleDeleteModalOk}
                onCancel={handleModalCancel}
            >
                <p>Bạn có chắc chắn muốn xóa người dùng này không?</p>
            </Modal>

            <Modal
                title="Thêm mới người dùng"
                visible={addModalVisible}
                onOk={handleAddModalOk}
                onCancel={handleModalCancel}
            >
                <Form form={form}>
                    <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input the name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="age" label="Age" rules={[{ required: true, message: 'Please input the age!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please input the address!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="phoneNumber" label="Phone Number" rules={[{ required: true, message: 'Please input the phone number!' }]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </Layout>
    );
};

export default DashboardPage;
