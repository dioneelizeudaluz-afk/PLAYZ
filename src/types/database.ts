export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          user_id: string;
          display_name: string | null;
          phone: string | null;
          role: "user" | "admin";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          display_name?: string | null;
          phone?: string | null;
          role?: "user" | "admin";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          display_name?: string | null;
          phone?: string | null;
          role?: "user" | "admin";
          created_at?: string;
          updated_at?: string;
        };
      };
      plans: {
        Row: {
          id: string;
          name: string;
          slug: string;
          price_mzn: number;
          duration_days: number;
          description: string | null;
          active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          price_mzn: number;
          duration_days: number;
          description?: string | null;
          active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          price_mzn?: number;
          duration_days?: number;
          description?: string | null;
          active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      movies: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          cover_path: string | null;
          category: string | null;
          video_url: string;
          access: "free" | "premium";
          published: boolean;
          created_by: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string | null;
          cover_path?: string | null;
          category?: string | null;
          video_url: string;
          access?: "free" | "premium";
          published?: boolean;
          created_by?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string | null;
          cover_path?: string | null;
          category?: string | null;
          video_url?: string;
          access?: "free" | "premium";
          published?: boolean;
          created_by?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      payments: {
        Row: {
          id: string;
          user_id: string;
          plan_id: string;
          amount_mzn: number;
          status: "pending" | "approved" | "rejected";
          reference: string | null;
          confirmed_by: string | null;
          confirmed_at: string | null;
          note: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          plan_id: string;
          amount_mzn: number;
          status?: "pending" | "approved" | "rejected";
          reference?: string | null;
          confirmed_by?: string | null;
          confirmed_at?: string | null;
          note?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          plan_id?: string;
          amount_mzn?: number;
          status?: "pending" | "approved" | "rejected";
          reference?: string | null;
          confirmed_by?: string | null;
          confirmed_at?: string | null;
          note?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      activation_codes: {
        Row: {
          id: string;
          code: string;
          plan_id: string;
          payment_id: string | null;
          user_id: string | null;
          status: "available" | "used" | "disabled";
          used_at: string | null;
          expires_at: string | null;
          created_by: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          code: string;
          plan_id: string;
          payment_id?: string | null;
          user_id?: string | null;
          status?: "available" | "used" | "disabled";
          used_at?: string | null;
          expires_at?: string | null;
          created_by?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          code?: string;
          plan_id?: string;
          payment_id?: string | null;
          user_id?: string | null;
          status?: "available" | "used" | "disabled";
          used_at?: string | null;
          expires_at?: string | null;
          created_by?: string | null;
          created_at?: string;
        };
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          plan_id: string;
          status: "active" | "expired" | "cancelled";
          started_at: string;
          expires_at: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          plan_id: string;
          status?: "active" | "expired" | "cancelled";
          started_at?: string;
          expires_at: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          plan_id?: string;
          status?: "active" | "expired" | "cancelled";
          started_at?: string;
          expires_at?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      admin_audit: {
        Row: {
          id: string;
          admin_user_id: string;
          action: string;
          target_table: string | null;
          target_id: string | null;
          metadata: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          admin_user_id: string;
          action: string;
          target_table?: string | null;
          target_id?: string | null;
          metadata?: Json | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          admin_user_id?: string;
          action?: string;
          target_table?: string | null;
          target_id?: string | null;
          metadata?: Json | null;
          created_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: {
      is_admin: {
        Args: Record<string, never>;
        Returns: boolean;
      };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
