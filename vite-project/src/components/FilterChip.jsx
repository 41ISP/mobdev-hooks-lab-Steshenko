import Checkbox from './Checkbox'

export default function FilterChip({ checked, onChange }) {
  return (
    <Checkbox id="filterCheckbox" checked={checked} onChange={onChange}>
      Только непрочитанные
    </Checkbox>
  )
}
