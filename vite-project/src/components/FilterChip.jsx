import Checkbox from './Checkbox'

const FilterChip = ({ checked, onChange }) => {
  return (
    <Checkbox id="filterCheckbox" checked={checked} onChange={onChange}>
      Только непрочитанные
    </Checkbox>
  )
}
export default FilterChip;


