import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import RhfSelect from '../select';
import RhfFormField from '../form-field';
import { FormWrapper, ErrorFormWrapper } from './story-utils';

const REGION_OPTIONS = [
  { label: 'US East (N. Virginia)', value: 'us-east-1' },
  { label: 'US West (Oregon)', value: 'us-west-2' },
  { label: 'EU (Ireland)', value: 'eu-west-1' },
  { label: 'Asia Pacific (Tokyo)', value: 'ap-northeast-1' },
];

const meta: Meta<typeof RhfSelect> = {
  title: 'Components/Select',
  component: RhfSelect,
};
export default meta;

type Story = StoryObj<typeof RhfSelect>;

export const Default: Story = {
  render: () => (
    <FormWrapper defaultValues={{ region: null }}>
      <RhfFormField name="region" label="AWS Region">
        <RhfSelect name="region" options={REGION_OPTIONS} placeholder="Choose a region" />
      </RhfFormField>
    </FormWrapper>
  ),
};

export const WithValue: Story = {
  render: () => (
    <FormWrapper defaultValues={{ region: { label: 'US East (N. Virginia)', value: 'us-east-1' } }}>
      <RhfFormField name="region" label="AWS Region">
        <RhfSelect name="region" options={REGION_OPTIONS} />
      </RhfFormField>
    </FormWrapper>
  ),
};

export const Disabled: Story = {
  render: () => (
    <FormWrapper defaultValues={{ region: { label: 'US East (N. Virginia)', value: 'us-east-1' } }}>
      <RhfFormField name="region" label="AWS Region">
        <RhfSelect name="region" options={REGION_OPTIONS} disabled />
      </RhfFormField>
    </FormWrapper>
  ),
};

export const WithError: Story = {
  render: () => (
    <ErrorFormWrapper defaultValues={{ region: null }} errors={{ region: 'Please select a region' }}>
      <RhfFormField name="region" label="AWS Region">
        <RhfSelect name="region" options={REGION_OPTIONS} placeholder="Choose a region" />
      </RhfFormField>
    </ErrorFormWrapper>
  ),
};
