import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import RhfInput from '../input';
import RhfFormField from '../form-field';
import { FormWrapper, ErrorFormWrapper } from './story-utils';

const meta: Meta<typeof RhfInput> = {
  title: 'Components/Input',
  component: RhfInput,
};
export default meta;

type Story = StoryObj<typeof RhfInput>;

export const Default: Story = {
  render: () => (
    <FormWrapper defaultValues={{ username: '' }}>
      <RhfFormField name="username" label="Username">
        <RhfInput name="username" placeholder="Enter a username" />
      </RhfFormField>
    </FormWrapper>
  ),
};

export const WithValue: Story = {
  render: () => (
    <FormWrapper defaultValues={{ username: 'jane.doe' }}>
      <RhfFormField name="username" label="Username">
        <RhfInput name="username" />
      </RhfFormField>
    </FormWrapper>
  ),
};

export const Disabled: Story = {
  render: () => (
    <FormWrapper defaultValues={{ username: 'jane.doe' }}>
      <RhfFormField name="username" label="Username">
        <RhfInput name="username" disabled />
      </RhfFormField>
    </FormWrapper>
  ),
};

export const WithError: Story = {
  render: () => (
    <ErrorFormWrapper defaultValues={{ username: '' }} errors={{ username: 'Username is required' }}>
      <RhfFormField name="username" label="Username">
        <RhfInput name="username" placeholder="Enter a username" />
      </RhfFormField>
    </ErrorFormWrapper>
  ),
};

export const Password: Story = {
  render: () => (
    <FormWrapper defaultValues={{ password: '' }}>
      <RhfFormField name="password" label="Password" constraintText="At least 8 characters">
        <RhfInput name="password" type="password" placeholder="Enter a password" />
      </RhfFormField>
    </FormWrapper>
  ),
};
