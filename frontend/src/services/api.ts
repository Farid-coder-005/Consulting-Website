import type {
  ApiResponse,
  Location,
  Service,
  Post,
  PaginatedPosts,
  Contact,
  LoginResponse,
  SearchResult,
} from "../types";

const BASE_URL = "http://localhost:3000/api/v1";

class ApiClient {
  private token: string | null = null;

  setToken(token: string | null) {
    this.token = token;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...((options.headers as Record<string, string>) || {}),
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "An error occurred");
    }

    return data;
  }

  // Health
  async health() {
    const res = await fetch("http://localhost:3000/health");
    return res.json();
  }

  // Locations
  async getLocations(): Promise<ApiResponse<Location[]>> {
    return this.request<Location[]>("/locations");
  }

  async getLocationById(id: string): Promise<ApiResponse<Location>> {
    return this.request<Location>(`/locations/${id}`);
  }

  // Services
  async getServices(): Promise<ApiResponse<Service[]>> {
    return this.request<Service[]>("/services");
  }

  async getServiceById(id: string): Promise<ApiResponse<Service>> {
    return this.request<Service>(`/services/${id}`);
  }

  // Posts
  async getPosts(
    page = 1,
    limit = 10
  ): Promise<ApiResponse<PaginatedPosts>> {
    return this.request<PaginatedPosts>(`/posts?page=${page}&limit=${limit}`);
  }

  async getPostById(id: string): Promise<ApiResponse<Post>> {
    return this.request<Post>(`/posts/${id}`);
  }

  // Search
  async search(
    query: string,
    type: "all" | "services" | "posts" | "locations" = "all"
  ): Promise<ApiResponse<SearchResult>> {
    return this.request<SearchResult>(
      `/search?q=${encodeURIComponent(query)}&type=${type}`
    );
  }

  // Contacts
  async createContact(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    message: string;
    serviceId?: string;
  }): Promise<ApiResponse<Contact>> {
    return this.request<Contact>("/contacts", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // Auth
  async login(
    email: string,
    password: string
  ): Promise<ApiResponse<LoginResponse>> {
    const result = await this.request<LoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (result.data?.token) {
      this.setToken(result.data.token);
    }
    return result;
  }
}

export const api = new ApiClient();
export default api;
