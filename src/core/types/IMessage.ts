export interface IMessage {
  id: string;
  text: string;
  created_at: Date;
  updated_at: Date;
  match_id: string;
  sender_id: string;
  is_seen: boolean;
}
