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
} from '@react-email/components'
import * as React from 'react'

export const ContactEmail = ({ firstName, lastName, email, subject, message }) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission: {subject}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerTitle}>Yoga Retreat Advisor</Heading>
          </Section>
          
          <Section style={content}>
            <Text style={paragraph}>
              You have a new contact form submission.
            </Text>

            <Section style={infoCard}>
              <Text style={label}>Name</Text>
              <Text style={value}>{firstName} {lastName}</Text>
              
              <Text style={label}>Email</Text>
              <Text style={value}>{email}</Text>
              
              <Text style={label}>Subject</Text>
              <Text style={value}>{subject}</Text>
            </Section>

            <Text style={label}>Message</Text>
            <Text style={messageBox}>
              {message}
            </Text>
            
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
  textAlign: 'left',
}

const infoCard = {
  backgroundColor: '#f8f9fa',
  borderRadius: '6px',
  padding: '24px',
  marginBottom: '24px',
}

const label = {
  color: '#8898aa',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase',
  margin: '0 0 4px 0',
}

const value = {
  color: '#32325d',
  fontSize: '16px',
  margin: '0 0 16px 0',
}

const messageBox = {
  color: '#32325d',
  fontSize: '16px',
  lineHeight: '24px',
  backgroundColor: '#f8f9fa',
  padding: '24px',
  borderRadius: '6px',
  whiteSpace: 'pre-wrap',
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
