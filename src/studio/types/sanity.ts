/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/ban-ts-comment */
import * as React from 'react';
import { ElementType, ReactNode } from 'react';
/* 
  https://github.com/sanity-io/sanity/issues/1857
  https://gist.github.com/barbogast/4bea3ad77272fafe0af3d4f70446d037
  https://github.com/sanity-io/sanity/issues/2709
*/

type Meta = {
  parent: { [key: string]: any };
  path: string[];
  document: { [key: string]: any };
};

type CustomRuleCallback = (
  field: any,
  meta: Meta,
) => true | string | Promise<true | string>;

export type RuleType = {
  required: () => RuleType;
  custom: (cb: CustomRuleCallback) => RuleType;
  min: (min: number) => RuleType;
  max: (max: number) => RuleType;
  length: (exactLength: number) => RuleType;
  greaterThan: (gt: number) => RuleType;
  uri: (options: { scheme: string[] }) => RuleType;
  integer: () => RuleType;
  precision: (limit: number) => RuleType;
};

type Validation = (rule: RuleType) => RuleType | RuleType[];

export type CommonFieldProps = {
  title?: string;
  fieldset?: string;
  validation?: Validation;
  description?: string;
  hidden?: boolean;
  readOnly?: boolean;
  defaultValue?: any;
  inputComponent?: ElementType;
};

export type StringField<Name extends string = string> = CommonFieldProps & {
  name: Name;
  type: 'string';
  options?:
    | {
        list: { title: string; value: string }[] | string[];
        layout?: string;
      }
    | never;
};

export type NumberField<Name extends string = string> = CommonFieldProps & {
  name: Name;
  type: 'number';
  options?: {
    list: { title: string; value: string }[] | string[];
  };
};

export type TextField<Name extends string = string> = CommonFieldProps & {
  name: Name;
  type: 'text';
  rows?: number;
  initialValue?: string;
};

export type BooleanField<Name extends string = string> = CommonFieldProps & {
  name: Name;
  type: 'boolean';
  options?: {
    layout?: 'switch' | 'checkbox';
  };
};

export type DateField<Name extends string = string> = CommonFieldProps & {
  name: Name;
  type: 'date';
  options?: {
    dateFormat?: string;
  };
};

export type SlugField<Name extends string = string> = CommonFieldProps & {
  name: Name;
  type: 'slug';
  options?: {
    source?: string;
  };
};

export type UrlField<Name extends string = string> = CommonFieldProps & {
  name: Name;
  type: 'url';
};

export type BlockField<Name extends string = string> = CommonFieldProps & {
  name: Name;
  type: 'block';
  styles?: Array<{
    title: string;
    value: string;
    blockEditor?: {
      render: ElementType;
    };
    icon?: ElementType;
  }>;
  lists?: Array<{
    title: string;
    value: string;
  }>;
  marks?: {
    annotations?: ArrayOf[];
    decorators?: Array<{
      title: string;
      value: string;
      icon?: ElementType;
    }>;
  };
  of?: ArrayOf[];
  icon?: ElementType;
};

type ArrayOf =
  | ObjectField
  | ReferenceField
  | ImageField
  | { type: string; to: { type: string } }
  | BlockField;

export type ArrayField<Name extends string = string> = CommonFieldProps & {
  name: Name;
  type: 'array';
  of: ArrayOf[];
};

type FilterFunctionResult = { filter: string; filterParams?: string };
type FilterFunction = (args: {
  document: { [key: string]: any };
  parentPath: string[];
  parent: Record<string, unknown>[];
}) => FilterFunctionResult;

type ReferenceField<Name extends string = string> = CommonFieldProps & {
  name: Name;
  type: 'reference';
  to: { type: string }[];
  options?: {
    filter: string | FilterFunction;
    filterParams?: { [key: string]: string };
  };
};

type ImageField<
  Name extends string = string,
  Schema extends Record<string, any> = Record<string, any>,
> = CommonFieldProps & {
  name: Name;
  type: 'image';
  fields?: FieldCollection<keyof Schema extends string ? keyof Schema : never>;
  options?: {
    hotspot?: boolean;
    accept?: string;
  };
};

type MarkdownField<Name extends string = string> = CommonFieldProps & {
  name: Name;
  type: 'markdown';
};

type FileField<Name extends string = string> = CommonFieldProps & {
  name: Name;
  type: 'file';
};

export type CustomField<Name extends string = string> = CommonFieldProps & {
  name: Name;
  type: 'icon' | 'iconPicker' | 'blockContent';
  options?: Record<string, any>;
};

export type FieldCollection<T extends string> = Array<Field<T>>;

export type Field<Name extends string = string> =
  | StringField<Name>
  | NumberField<Name>
  | TextField<Name>
  | MarkdownField<Name>
  | BooleanField<Name>
  | DateField<Name>
  | SlugField<Name>
  | UrlField<Name>
  | ArrayField<Name>
  | ReferenceField<Name>
  | ImageField<Name>
  | FileField<Name>
  | ObjectField<any, Name>
  | BlockField<Name>
  | CustomField<Name>;

type Preview = {
  select?: { [key: string]: string };
  prepare?: (selection: { [key: string]: any }) => {
    title?: ReactNode;
    subtitle?: ReactNode;
    media?: ReactNode;
  };
  component?: React.VFC;
};

type Fieldset = {
  name: string;
  title: string;
  options?: { collapsible: boolean; collapsed?: boolean; columns?: number };
};

export type ObjectField<
  Schema = any,
  Name extends string = string,
> = CommonFieldProps & {
  name: Name;
  type: 'object';
  title?: string;
  // @ts-ignore
  fields: FieldCollection<keyof Schema>;
  validation?: Validation;
  preview?: Preview;
  fieldsets?: Fieldset[];
  description?: string;
  options?: { collapsible?: boolean; collapsed?: boolean };
};

export type Document<T extends Record<string, any>> = {
  type: 'document';
  name: string;
  // @ts-ignore
  fields: FieldCollection<keyof T>;
  title?: string;
  validation?: Validation;
  preview?: Preview;
  icon?: ElementType;
  fieldsets?: Fieldset[];
  initialValue?: { [key: string]: any };
  orderings?: {
    name: string;
    title: string;
    by: { field: string; direction: string }[];
  }[];
};

export type PreviewProps<T extends Record<string, any>> = {
  value: T;
};

export type Body2TextProps = { children: React.FunctionComponent<any> };
