import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 mt-10">
      <Skeleton className="h-[125px] w-[250px] rounded-xl bg-black" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-black" />
        <Skeleton className="h-4 w-[200px] bg-black" />
      </div>
    </div>
  );
}
