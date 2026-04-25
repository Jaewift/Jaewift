export interface Url {
  id: string;
  type: string;
  url: string;
}

export interface Status {
  id: string;
  type: string;
  status: {
    id: string;
    name: string;
    color: string;
  };
}

export interface Date {
  date: {
    end: string | null;
    start: string;
    timezone: string | null;
  };
  id: string;
  type: string;
}

export interface UpdatedAt {
  id: string;
  type: string;
  last_edited_time: string;
}

export interface CreatedAt {
  id: string;
  type: string;
  created_time: string;
}

export interface SelectOption {
  id: string;
  name: string;
  color: string;
}

export interface Select {
  id: string;
  type: string;
  select: SelectOption;
}

export interface MultiSelect {
  id: string;
  type: string;
  multi_select: SelectOption[];
}

export interface File {
  files: {
    file?: {
      expiry_time: string;
      url: string;
    };
    external?: {
      url: string;
    };
    name: string;
    type: string;
  }[];
  id: string;
  type: string;
}

export interface Number {
  id: string;
  type: string;
  number: number;
}

interface Text {
  type: string;
  text: {
    content: string;
    link: string | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string | null;
}

export interface RichText {
  id: string;
  type: string;
  rich_text: Text[];
}

export interface Name {
  id: string;
  type: string;
  title: Text[];
}

export interface Checkbox {
  id: string;
  type: string;
  checkbox: boolean;
}