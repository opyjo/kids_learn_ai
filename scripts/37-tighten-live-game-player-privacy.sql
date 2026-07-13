-- Realtime must never reveal another student's private score or power-up state.
-- Hosts can inspect every player; students can subscribe only to their own row.
DROP POLICY IF EXISTS "Game participants view players" ON quiz_game_players;
CREATE POLICY "Hosts view game players; students view self"
  ON quiz_game_players
  FOR SELECT
  TO authenticated
  USING (
    user_id = (SELECT auth.uid()) OR
    EXISTS (
      SELECT 1
      FROM quiz_games
      WHERE quiz_games.id = quiz_game_players.game_id
        AND quiz_games.host_id = (SELECT auth.uid())
    )
  );
