"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { cookies } from "next/headers";
import { cache } from "react";

export const createServerSupabaseClient = cache(() =>
  createServerComponentClient({ cookies })
);

export const getUser = async () => {
  const supabase = createServerSupabaseClient();
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return null;

    return user;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export const getUserProjects = async (userId?: string) => {
  const supabase = createServerSupabaseClient();

  let id = userId;

  if (!id) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    id = user?.id;
  }
  if (!id) return [];

  const { data, error } = await supabase
    .from("projects")
    .select("id, name")
    .eq("user_id", id);
  if (data) return data;

  return [];
};
