export interface LocationSearchResponse {
  status: number;
  message: string;
  result: LocationSearchResult;
}

export interface LocationSearchResult {
  addressComponent: LocationAddressComponent;
}

export interface LocationAddressComponent {
  city: string;
}
