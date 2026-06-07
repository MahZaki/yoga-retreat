import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
  Button,
} from '@react-email/components'
import * as React from 'react'

export const NewsletterEmail = ({ email }) => {
  return (
    <Html>
      <Head />
      <Preview>New Newsletter Subscriber: {email}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerTitle}>Yoga Retreat Advisor</Heading>
          </Section>
          
          <Section style={content}>
            <Text style={paragraph}>
              You have a new subscriber to the <strong>Yoga Retreat Advisor</strong> newsletter!
            </Text>

            <Section style={infoBox}>
              <Text style={value}>{email}</Text>
            </Section>
            
            <Section style={buttonContainer}>
              <Button style={button} href={`mailto:${email}`}>
                Send Welcome Email
              </Button>
            </Section>
            
            <Hr style={hr} />
            <Text style={footer}>
              &copy; 2026 Yoga Retreat Advisor. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
}

const header = {
  padding: '32px',
  borderBottom: '1px solid #eaeaea',
}

const headerTitle = {
  color: '#34495e',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '24px',
  margin: '0',
  textAlign: 'center',
}

const content = {
  padding: '32px',
}

const paragraph = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'center',
}

const infoBox = {
  backgroundColor: '#f8f9fa',
  borderRadius: '6px',
  padding: '16px',
  margin: '24px 0',
  textAlign: 'center',
}

const value = {
  color: '#32325d',
  fontSize: '20px',
  fontWeight: '600',
  margin: '0',
}

const buttonContainer = {
  textAlign: 'center',
  marginTop: '32px',
}

const button = {
  backgroundColor: '#1E40AF',
  borderRadius: '4px',
  color: '#fff',
  fontSize: '15px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  padding: '12px 24px',
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '32px 0 24px',
}

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  textAlign: 'center',
}
