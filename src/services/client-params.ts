import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function useSearchParamsMap() {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const entries = Array.from(searchParams.entries());
    const map = new Map(entries);
    return map;
  }, [searchParams]);
}

export function searchParamMapToString(map: Map<string, string>) {
  const entries = Array.from(map.entries());
  return entries
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
}
