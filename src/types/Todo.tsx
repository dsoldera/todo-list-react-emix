export interface TodoProps {
  id: string,
  text: string,
  statusInProgress: boolean,
  onCheckDone?: () => void,
  onDelete?: () => void,
  onEdit?: () => void,
}