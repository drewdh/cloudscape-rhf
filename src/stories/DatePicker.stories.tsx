import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import RhfDatePicker from '../date-picker';
import RhfFormField from '../form-field';
import { FormWrapper, ErrorFormWrapper } from './story-utils';

const meta: Meta<typeof RhfDatePicker> = {
  title: 'Components/DatePicker',
  component: RhfDatePicker,
};
export default meta;

type Story = StoryObj<typeof RhfDatePicker>;

export const Default: Story = {
  render: () => (
    <FormWrapper defaultValues={{ startDate: '' }}>
      <RhfFormField name="startDate" label="Start date">
        <RhfDatePicker name="startDate" placeholder="YYYY/MM/DD" />
      </RhfFormField>
    </FormWrapper>
  ),
};

export const WithValue: Story = {
  render: () => (
    <FormWrapper defaultValues={{ startDate: '2025-01-15' }}>
      <RhfFormField name="startDate" label="Start date">
        <RhfDatePicker name="startDate" placeholder="YYYY/MM/DD" />
      </RhfFormField>
    </FormWrapper>
  ),
};

export const Disabled: Story = {
  render: () => (
    <FormWrapper defaultValues={{ startDate: '2025-01-15' }}>
      <RhfFormField name="startDate" label="Start date">
        <RhfDatePicker name="startDate" disabled />
      </RhfFormField>
    </FormWrapper>
  ),
};

export const WithError: Story = {
  render: () => (
    <ErrorFormWrapper
      defaultValues={{ startDate: '' }}
      errors={{ startDate: 'Start date is required' }}
    >
      <RhfFormField name="startDate" label="Start date">
        <RhfDatePicker name="startDate" placeholder="YYYY/MM/DD" />
      </RhfFormField>
    </ErrorFormWrapper>
  ),
};
