export default interface LocationSearchResponse {
    status: number;
    message: string;
    result: LocationSearchResult;
}

interface LocationSearchResult {
    addressComponent: LocationAddressComponent;
}

interface LocationAddressComponent {
    city: string;
}
