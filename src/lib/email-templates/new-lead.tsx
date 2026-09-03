import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { TemplateEntry } from "./registry";

interface Props {
  name?: string;
  phone?: string;
  source?: string;
  submittedAt?: string;
}

const BRAND = "#AE31A6";

const NewLeadEmail = ({ name, phone, source, submittedAt }: Props) => (
  <Html lang="ru" dir="ltr">
    <Head />
    <Preview>{`Новая заявка с сайта: ${name || "без имени"}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Новая заявка с сайта</Heading>
        <Section style={card}>
          <Text style={row}>
            <span style={label}>Имя:</span> {name || "—"}
          </Text>
          <Text style={row}>
            <span style={label}>Телефон:</span> {phone || "—"}
          </Text>
          <Text style={row}>
            <span style={label}>Источник:</span> {source || "—"}
          </Text>
          <Text style={row}>
            <span style={label}>Время:</span> {submittedAt || "—"}
          </Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>Комильфо — уведомление о заявке с сайта komilfocentr.ru</Text>
      </Container>
    </Body>
  </Html>
);

export const template = {
  component: NewLeadEmail,
  subject: (data: Record<string, any>) => `Новая заявка: ${data?.name || "клиент"}`,
  displayName: "Новая заявка с сайта",
  to: "info@komilfocentr.ru",
  previewData: {
    name: "Анна",
    phone: "+7 (900) 123-45-67",
    source: "Записаться на консультацию",
    submittedAt: "03.09.2026, 15:20",
  },
} satisfies TemplateEntry;

const main = { backgroundColor: "#ffffff", fontFamily: "Arial, Helvetica, sans-serif" };
const container = { padding: "24px", maxWidth: "560px" };
const heading = { color: BRAND, fontSize: "22px", margin: "0 0 16px" };
const card = {
  border: "1px solid #eee",
  borderRadius: "12px",
  padding: "16px 20px",
};
const row = { fontSize: "15px", color: "#222", margin: "6px 0" };
const label = { color: "#777", fontSize: "13px" };
const hr = { borderColor: "#eee", margin: "20px 0" };
const footer = { fontSize: "12px", color: "#888" };
