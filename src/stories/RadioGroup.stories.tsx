import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import RhfRadioGroup from '../radio-group';
import RhfFormField from '../form-field';
import { FormWrapper, ErrorFormWrapper } from './story-utils';

const PLAN_OPTIONS = [
  { value: 'free', label: 'Free', description: 'Up to 5 users, 1 GB storage' },
  { value: 'pro', label: 'Pro', description: 'Up to 50 users, 50 GB storage' },
  { value: 'enterprise', label: 'Enterprise', description: 'Unlimited users, unlimited storage' },
];

const meta: Meta<typeof RhfRadioGroup> = {
  title: 'Components/RadioGroup',
  component: RhfRadioGroup,
};
export default meta;

type Story = StoryObj<typeof RhfRadioGroup>;

export const Default: Story = {
  render: () => (
    <FormWrapper defaultValues={{ plan: null }}>
      <RhfFormField name="plan" label="Select a plan">
        <RhfRadioGroup name="plan" items={PLAN_OPTIONS} />
      </RhfFormField>
    </FormWrapper>
  ),
};

export const WithValue: Story = {
  render: () => (
    <FormWrapper defaultValues={{ plan: 'pro' }}>
      <RhfFormField name="plan" label="Select a plan">
        <RhfRadioGroup name="plan" items={PLAN_OPTIONS} />
      </RhfFormField>
    </FormWrapper>
  ),
};

export const WithError: Story = {
  render: () => (
    <ErrorFormWrapper defaultValues={{ plan: null }} errors={{ plan: 'Please select a plan' }}>
      <RhfFormField name="plan" label="Select a plan">
        <RhfRadioGroup name="plan" items={PLAN_OPTIONS} />
      </RhfFormField>
    </ErrorFormWrapper>
  ),
};
