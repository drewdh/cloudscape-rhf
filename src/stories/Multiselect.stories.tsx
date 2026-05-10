import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import RhfMultiselect from '../multiselect';
import RhfFormField from '../form-field';
import { FormWrapper, ErrorFormWrapper } from './story-utils';

const TAG_OPTIONS = [
  { label: 'Production', value: 'production' },
  { label: 'Staging', value: 'staging' },
  { label: 'Development', value: 'development' },
  { label: 'Testing', value: 'testing' },
  { label: 'Internal', value: 'internal' },
];

const meta: Meta<typeof RhfMultiselect> = {
  title: 'Components/Multiselect',
  component: RhfMultiselect,
};
export default meta;

type Story = StoryObj<typeof RhfMultiselect>;

export const Default: Story = {
  render: () => (
    <FormWrapper defaultValues={{ tags: [] }}>
      <RhfFormField name="tags" label="Tags">
        <RhfMultiselect name="tags" options={TAG_OPTIONS} placeholder="Choose tags" />
      </RhfFormField>
    </FormWrapper>
  ),
};

export const WithValues: Story = {
  render: () => (
    <FormWrapper
      defaultValues={{
        tags: [
          { label: 'Production', value: 'production' },
          { label: 'Internal', value: 'internal' },
        ],
      }}
    >
      <RhfFormField name="tags" label="Tags">
        <RhfMultiselect name="tags" options={TAG_OPTIONS} />
      </RhfFormField>
    </FormWrapper>
  ),
};

export const Disabled: Story = {
  render: () => (
    <FormWrapper
      defaultValues={{
        tags: [{ label: 'Production', value: 'production' }],
      }}
    >
      <RhfFormField name="tags" label="Tags">
        <RhfMultiselect name="tags" options={TAG_OPTIONS} disabled />
      </RhfFormField>
    </FormWrapper>
  ),
};

export const WithError: Story = {
  render: () => (
    <ErrorFormWrapper defaultValues={{ tags: [] }} errors={{ tags: 'At least one tag is required' }}>
      <RhfFormField name="tags" label="Tags">
        <RhfMultiselect name="tags" options={TAG_OPTIONS} placeholder="Choose tags" />
      </RhfFormField>
    </ErrorFormWrapper>
  ),
};
