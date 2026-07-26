-- Live games can reveal the answer the moment the question timer runs out
-- instead of waiting for the host to click "Reveal answer". Hosts who would
-- rather talk a question through before showing the answer switch this off.
--
-- Unlike powerups_enabled and team_mode this setting is NOT locked once the
-- game starts: it only affects pacing, never scoring, so a host can change
-- their mind between questions.
ALTER TABLE quiz_games
  ADD COLUMN IF NOT EXISTS auto_reveal BOOLEAN NOT NULL DEFAULT TRUE;

COMMENT ON COLUMN quiz_games.auto_reveal IS
  'When true the host client moves the game to review as soon as the question timer reaches zero.';
