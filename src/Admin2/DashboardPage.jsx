import React, { useState, useEffect } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Breadcrumb, Layout, Menu, Typography, Table, Modal, Form, Input, Button } from 'antd';
import '../Admin2/DashboardPage.css';

const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;
const labels = ['Người Dùng', 'Sản Phẩm', 'Đơn Hàng'];

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = `sub${index + 1}`;
    return {
        key,
        icon: React.createElement(icon),
        label: labels[index],
    };
});

const initialUserData = [
    { key: '1', name: 'Mike', age: 32, address: '10 Downing Street', phoneNumber: '1234567890' },
    { key: '2', name: 'John', age: 42, address: '10 Downing Street', phoneNumber: '0987654321' },
];

const initialProductData = [
    { key: '1', name: 'Laptop', price: '$1200', stock: 20 },
    { key: '2', name: 'Phone', price: '$800', stock: 50 },
];

const initialOrderData = [
    { key: '1', orderId: '1234', customer: 'Mike', total: '$1200' },
    { key: '2', orderId: '5678', customer: 'John', total: '$800' },
];

const DashboardPage = () => {
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [addModalVisible, setAddModalVisible] = useState(false);
    const [recordToEdit, setRecordToEdit] = useState(null);
    const [recordToDelete, setRecordToDelete] = useState(null);
    const [selectedMenuKey, setSelectedMenuKey] = useState('sub1');

    const getDataFromLocalStorage = (key, initialData) => {
        const savedData = localStorage.getItem(key);
        return savedData ? JSON.parse(savedData) : initialData;
    };

    const [userData, setUserData] = useState(getDataFromLocalStorage('userData', initialUserData));
    const [productData, setProductData] = useState(getDataFromLocalStorage('productData', initialProductData));
    const [orderData, setOrderData] = useState(getDataFromLocalStorage('orderData', initialOrderData));

    const [dataSource, setDataSource] = useState(userData);

    const [form] = Form.useForm();

    const saveDataToLocalStorage = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    useEffect(() => {
        switch (selectedMenuKey) {
            case 'sub1':
                setDataSource(userData);
                break;
            case 'sub2':
                setDataSource(productData);
                break;
            case 'sub3':
                setDataSource(orderData);
                break;
            default:
                break;
        }
    }, [selectedMenuKey, userData, productData, orderData]);

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
        form.validateFields().then(values => {
            let updatedData;
            switch (selectedMenuKey) {
                case 'sub1':
                    updatedData = userData.map(item => item.key === recordToEdit.key ? { ...item, ...values } : item);
                    setUserData(updatedData);
                    saveDataToLocalStorage('userData', updatedData);
                    break;
                case 'sub2':
                    updatedData = productData.map(item => item.key === recordToEdit.key ? { ...item, ...values } : item);
                    setProductData(updatedData);
                    saveDataToLocalStorage('productData', updatedData);
                    break;
                case 'sub3':
                    updatedData = orderData.map(item => item.key === recordToEdit.key ? { ...item, ...values } : item);
                    setOrderData(updatedData);
                    saveDataToLocalStorage('orderData', updatedData);
                    break;
                default:
                    break;
            }
            setEditModalVisible(false);
            setRecordToEdit(null);
        }).catch(info => {
            console.log('Validate Failed:', info);
        });
    };

    const handleDeleteModalOk = () => {
        let updatedData;
        switch (selectedMenuKey) {
            case 'sub1':
                updatedData = userData.filter(item => item.key !== recordToDelete.key);
                setUserData(updatedData);
                saveDataToLocalStorage('userData', updatedData);
                break;
            case 'sub2':
                updatedData = productData.filter(item => item.key !== recordToDelete.key);
                setProductData(updatedData);
                saveDataToLocalStorage('productData', updatedData);
                break;
            case 'sub3':
                updatedData = orderData.filter(item => item.key !== recordToDelete.key);
                setOrderData(updatedData);
                saveDataToLocalStorage('orderData', updatedData);
                break;
            default:
                break;
        }
        setDeleteModalVisible(false);
        setRecordToDelete(null);
    };

    const handleModalCancel = () => {
        setEditModalVisible(false);
        setDeleteModalVisible(false);
        setAddModalVisible(false);
    };

    const handleMenuClick = ({ key }) => {
        setSelectedMenuKey(key);
    };

    const handleAddNewRecord = () => {
        setAddModalVisible(true);
        form.resetFields();
    };

    const handleAddModalOk = () => {
        form.validateFields().then(values => {
            const newRecord = { ...values, key: `${dataSource.length + 1}` };
            let updatedData;
            switch (selectedMenuKey) {
                case 'sub1':
                    updatedData = [...userData, newRecord];
                    setUserData(updatedData);
                    saveDataToLocalStorage('userData', updatedData);
                    break;
                case 'sub2':
                    updatedData = [...productData, newRecord];
                    setProductData(updatedData);
                    saveDataToLocalStorage('productData', updatedData);
                    break;
                case 'sub3':
                    updatedData = [...orderData, newRecord];
                    setOrderData(updatedData);
                    saveDataToLocalStorage('orderData', updatedData);
                    break;
                default:
                    break;
            }
            setAddModalVisible(false);
        }).catch(info => {
            console.log('Validate Failed:', info);
        });
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

    const getColumns = () => {
        switch (selectedMenuKey) {
            case 'sub1':
                return userColumns;
            case 'sub2':
                return productColumns;
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
