import GIBadge from '../GIBadge'

export default function GIBadgeExample() {
  return (
    <div className="p-8 flex gap-4 items-center">
      <GIBadge size="sm" />
      <GIBadge size="md" />
      <GIBadge size="lg" />
    </div>
  )
}
