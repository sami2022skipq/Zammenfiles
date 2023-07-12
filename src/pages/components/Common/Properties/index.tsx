import './style.less';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Card, Col, Input, Row, Select, Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { getAllListingPublic } from '@/api/listsing';
import { IPropertyRoutes } from '@/routes/routin';

const { Meta } = Card;

const AppProperties = () => {
  const [publicListing, setPublicListing] = useState<any>();
  const data = [
    { title: 'Card 1', description: 'Description 1' },
    { title: 'Card 2', description: 'Description 2' },
    { title: 'Card 3', description: 'Description 3' },
    { title: 'Card 4', description: 'Description 4' },
    { title: 'Card 5', description: 'Description 5' },
    { title: 'Card 6', description: 'Description 6' },
    { title: 'Card 7', description: 'Description 7' },
    { title: 'Card 8', description: 'Description 8' },
    { title: 'Card 9', description: 'Description 9' },
    { title: 'Card 10', description: 'Description 10' },
    { title: 'Card 11', description: 'Description 11' },
    { title: 'Card 12', description: 'Description 12' },
    { title: 'Card 8', description: 'Description 8' },
    { title: 'Card 9', description: 'Description 9' },
    { title: 'Card 10', description: 'Description 10' },
    { title: 'Card 11', description: 'Description 11' },
    { title: 'Card 12', description: 'Description 12' },
    { title: 'Card 8', description: 'Description 8' },
    { title: 'Card 9', description: 'Description 9' },
    { title: 'Card 10', description: 'Description 10' },
    { title: 'Card 11', description: 'Description 11' },
    { title: 'Card 12', description: 'Description 12' },
  ];

  const { data: ListingData, isLoading } = useQuery([`get_all_listing`], () => getAllListingPublic());

  useEffect(() => {
    if (ListingData) {
      setPublicListing(ListingData?.data);
    }
  }),
    [ListingData];
  console.log(publicListing, 'publicListing');

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Card className="search_form">
          <Tabs type="card">
            <Tabs.TabPane tab="Sell" key={1}>
              <div className="flex">
                <Input placeholder="City, community, or building" />
                <Select placeholder="Select" className="ml-10" />
                <Select placeholder="Select" className="ml-10" />
                <Select placeholder="Select" className="ml-10" />
                <Select placeholder="Select" className="ml-10" />
                <Button type="primary" className="ml-5">
                  <SearchOutlined />
                </Button>
              </div>
              <div className="full-width mt-10">
                <Input addonBefore={<SearchOutlined />} size="large" />
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Rent" key={2}>
              <div className="flex">
                <Input placeholder="City, community, or building" />
                <Select placeholder="Select" className="ml-10" />
                <Select placeholder="Select" className="ml-10" />
                <Select placeholder="Select" className="ml-10" />
                <Select placeholder="Select" className="ml-10" />
              </div>
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </div>
      <div className="padding_left_right">
        <Row gutter={[16, 16]} id="#hero">
          <Col md={24}>
            <h1>Browse Properties</h1>
          </Col>

          <Col md={8} sm={12} xs={24} lg={8} xl={8}>
            <Link to={IPropertyRoutes.DETAIL}>
              <Card
                className="full-width"
                hoverable
                cover={
                  <div style={{ width: '100%' }}>
                    <img
                      alt="Real Estate"
                      src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                      <h2 style={{ color: '#fff', fontSize: '24px' }}>Area:200</h2>
                      <p style={{ color: '#fff' }}>Price:1000</p>
                    </div>
                  </div>
                }
              >
                <Meta title="View All Properties" description="Default" />
              </Card>
            </Link>
          </Col>
          <Col md={8} sm={12} xs={24} lg={8} xl={8}>
            <Card
              className="full-width"
              hoverable
              cover={
                <div style={{ width: '100%' }}>
                  <img
                    alt="Real Estate"
                    src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h2 style={{ color: '#fff', fontSize: '24px' }}>Area:200</h2>
                    <p style={{ color: '#fff' }}>Price:1000</p>
                  </div>
                </div>
              }
            >
              <Meta title="Commercial" description="Commercial" />
            </Card>
          </Col>

          <Col md={8} sm={12} xs={24} lg={8} xl={8}>
            <Card
              className="full-width"
              hoverable
              cover={
                <div style={{ width: '100%' }}>
                  <img
                    alt="Real Estate"
                    src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h2 style={{ color: '#fff', fontSize: '24px' }}>Area:200</h2>
                    <p style={{ color: '#fff' }}>Price:1000</p>
                  </div>
                </div>
              }
            >
              <Meta title="Residential Properties" description="Residential" />
            </Card>
          </Col>

          <Col md={24}>
            <h1>Top Agents</h1>
          </Col>
          {data?.map((item: any, index) => {
            return (
              <Col md={4} sm={12} xs={24} lg={6} xl={6} key={index}>
                <Link to="/client/details">
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
                        style={{ height: '200px' }}
                      />
                    }
                    actions={[
                      <div>
                        {' '}
                        4<br /> For Rent
                      </div>,
                      <div>
                        4 <br /> For Sale
                      </div>,
                    ]}
                  >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default AppProperties;
