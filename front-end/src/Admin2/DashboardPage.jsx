import React, { useState, useEffect } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons';
import { EditOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import { Avatar, Breadcrumb, Layout, Menu, Typography, theme, Table, Modal, Form, Input, Button, Select, Upload, message } from 'antd';
import '../Admin2/DashboardPage.css';
import requestApi from '../helpers/api';

const { Option } = Select;
const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;
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
        label: 'Quản lý tin tức',
        children: [
            { key: 'sub2-1', label: 'Tin tức' },
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
    const [dataSource, setDataSource] = useState([]);
    const [form] = Form.useForm();


    const [category, setCategories] = useState([]);
    const [post, setPost] = useState([]);

    //Thêm loại bài post
    const addPost = (post) => {
        requestApi('/post/addPost', 'POST', post, 'json')
          .then(response => {
            console.log('Post added successfully:', response.data);
          })
          .catch(error => {
            console.error('Error adding post:', error);
          });
      };

    //Thêm loại sản phẩm
    const addCategory = (category) => {
        requestApi('/category/addCategory', 'POST', category, {
            headers: {
                'Content-Type': 'multipart/form-data' // Đảm bảo header Content-Type là multipart/form-data khi gửi FormData
            }
        })
            .then(response => {

                // Xử lý khi thêm sản phẩm thành công
                console.log('Category added successfully:', response.data);
                // fetchProduct();

                // Cập nhật danh sách sản phẩm hoặc thực hiện các hành động khác sau khi thêm sản phẩm thành công
            })
            .catch(error => {
                // Xử lý khi có lỗi xảy ra
                console.error('Error adding ', error);

            });

    }

    // Hàm để lấy loại sản phẩm
    const fetchCategory = async () => {
        try {
            const response = await requestApi('/category/getCategory', 'GET', null);
            setCategories(response.data)
            // Nếu phản hồi thành công, in ra dữ liệu
            console.log(response.data); // Xử lý dữ liệu nhận được từ API
        } catch (error) {
            console.error('Error fetching category:', error);
        }
    };

    // Lấy loại sản phẩm
    useEffect(() => {
        fetchCategory();
    }, []);


    const handleMenuClick = ({ key }) => {
        setSelectedMenuKey(key);
    };
    //Hàm lưu dữ liệu datasource
    useEffect(() => {
        switch (selectedMenuKey) {
            case 'sub1':

                break;
            case 'sub2-1':
                setDataSource(post);
                break;
            case 'sub2-2':
                setDataSource(category);
                break;
            case 'sub3':

                break;
            default:
                break;
        }
    }, [selectedMenuKey, category]);

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

            switch (selectedMenuKey) {
                case 'sub1':

                    break;
                case 'sub2':

                    break;
                case 'sub3':

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

        switch (selectedMenuKey) {
            case 'sub1':

                break;
            case 'sub2':

                break;
            case 'sub3':

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

    const handleAddNewRecord = () => {
        setAddModalVisible(true);
        form.resetFields();
    };

    const handleAddModalOk = () => {
        form.validateFields().then(values => {

            switch (selectedMenuKey) {
                case 'sub1':

                    break;
                case 'sub2-1':
                    const post = new FormData();
                    post.append('title', values.title);
                    post.append('content', values.content);
                    post.append('categoryId', values.categoryId);

                    if (values.file && values.file.fileList && values.file.fileList.length > 0) {
                        // Đảm bảo lấy đúng file từ fileList
                        post.append('image', values.file.fileList[0].originFileObj);
                    } else {
                        console.error('File không hợp lệ hoặc không tồn tại');
                        return;
                    }

                    console.log('FormData content:', post); // Xem nội dung FormData

                    addPost(post);
                    break;
                case 'sub2-2':
                    const category = new FormData();
                    category.append('name', values.name);
                    addCategory(category);
                    // fetchCategory();

                    break;
                case 'sub3':

                    break;
                default:
                    break;
            }
            setAddModalVisible(false);
        }).catch(info => {
            console.log('Validate Failed:', info);
        });
    };

    const getColumns = () => {
        switch (selectedMenuKey) {
            case 'sub1':
                return [
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

            case 'sub2-1':
                return [
                    { title: 'title', dataIndex: 'title', key: 'title' },
                    { title: 'content', dataIndex: 'content', key: 'content' },
                    { title: 'categoryId', dataIndex: 'categoryId', key: 'categoryId' },
                    {
                        title: 'Ảnh',
                        dataIndex: 'image',
                        key: 'image',
                        render: (text, record) => (
                            <img src={`/images/${record.image}`} alt={record.title} style={{ maxWidth: '100px' }} />

                        ),
                    },
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
            case 'sub2-2':
                return [
                    {
                        title: 'ID',
                        dataIndex: 'id',
                        key: 'id',
                    },
                    {
                        title: 'Loại sản phẩm',
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
            case 'sub3':
                return [
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
            default:
                return [];
        }
    };

    const getModalTitle = () => {
        switch (selectedMenuKey) {
            case 'sub1':
                return {
                    edit: 'Chỉnh sửa người dùng',
                    delete: 'Xóa người dùng',
                    add: 'Thêm mới người dùng',
                };
            case 'sub2-1':
                return {
                    edit: 'Chỉnh sửa  tin tức',
                    delete: 'Xóa tin tức',
                    add: 'Thêm mới tin tức',
                };
            case 'sub2-2':
                return {
                    edit: 'Chỉnh sửa loại tin tức',
                    delete: 'Xóa loại',
                    add: 'Thêm mới loại',
                };
            case 'sub3':
                return {
                    edit: 'Chỉnh sửa đơn hàng',
                    delete: 'Xóa đơn hàng',
                    add: 'Thêm mới đơn hàng',
                };
            default:
                return {};
        }
    };

    const getModalFields = () => {
        switch (selectedMenuKey) {
            case 'sub1':
                return (
                    <>
                        <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input the name!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="id"
                            label="Loại sản phẩm"
                            rules={[{ required: true, message: 'Please select a category!' }]}
                        >
                            <Select
                                placeholder="Chọn loại sản phẩm"
                            >
                                {category.map((category) => (
                                    <Option key={category.id} value={category.id}>
                                        {category.name}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please input the address!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="phoneNumber" label="Phone Number" rules={[{ required: true, message: 'Please input the phone number!' }]}>
                            <Input />
                        </Form.Item>
                    </>
                );
            case 'sub2-1':
                return (
                    <>
                        <Form.Item name="title" label="title" rules={[{ required: true, message: 'Please input the name!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="categoryId"
                            label="Loại sản phẩm"
                            rules={[{ required: true, message: 'Please select a category!' }]}
                        >
                            <Select
                                placeholder="Chọn loại sản phẩm"

                            >
                                {category.map((category) => (
                                    <Option key={category.id} value={category.id}>
                                        {category.name}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item name="content" label="content" rules={[{ required: true, message: 'Please input the address!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="file"
                            label="Ảnh"
                            rules={[{ required: true, message: 'Vui lòng tải lên một hình ảnh!' }]}
                        >
                            <Upload
                                beforeUpload={() => false} // Ngăn chặn tự động tải lên
                                listType="picture"
                                onChange={info => form.setFieldsValue({ file: info })}
                            >
                                <Button icon={<UploadOutlined />}>Click để tải lên</Button>
                            </Upload>
                        </Form.Item>


                    </>
                );
            case 'sub2-2':
                return (
                    <>
                        <Form.Item name="name" label="Tên loại sản phẩm" rules={[{ required: true, message: 'Vui lòng nhập tên loại sản phẩm!' }]}>
                            <Input />
                        </Form.Item>

                    </>
                );
            case 'sub3':
                return (
                    <>
                        <Form.Item name="orderId" label="Order ID" rules={[{ required: true, message: 'Please input the order ID!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="customer" label="Customer" rules={[{ required: true, message: 'Please input the customer!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="total" label="Total" rules={[{ required: true, message: 'Please input the total!' }]}>
                            <Input />
                        </Form.Item>
                    </>
                );
            default:
                return null;
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
                title={getModalTitle().edit}
                visible={editModalVisible}
                onOk={handleEditModalOk}
                onCancel={handleModalCancel}
            >
                <Form form={form}>
                    {getModalFields()}
                </Form>
            </Modal>

            <Modal
                title={getModalTitle().delete}
                visible={deleteModalVisible}
                onOk={handleDeleteModalOk}
                onCancel={handleModalCancel}
            >
                <p>Bạn có chắc chắn muốn xóa bản ghi này không?</p>
            </Modal>

            <Modal
                title={getModalTitle().add}
                visible={addModalVisible}
                onOk={handleAddModalOk}
                onCancel={handleModalCancel}
            >
                <Form form={form}>
                    {getModalFields()}
                </Form>
            </Modal>
        </Layout>
    );
};

export default DashboardPage;
