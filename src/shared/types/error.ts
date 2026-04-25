export interface Error {
  object: string;
  message: string;
  code: Code;
  status: string;
  additional_data: object;
}

type Code =
  | "object_not_found"
  | "invalid_json"
  | "unauthorized"
  | "restricted_resource"
  | "conflict_error"
  | "rate_limited"
  | "internal_server_error"
  | "service_unavailable";
