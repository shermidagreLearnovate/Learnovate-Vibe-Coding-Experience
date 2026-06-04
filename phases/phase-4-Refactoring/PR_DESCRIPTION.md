## Change Type
*Please mark with an `x` the option that applies.*
- [x] ✨ New feature
- [x] 💄 UI/UX improvements
- [x] ⚙️ Configuration, Docker or dependency changes

---

## Which service(s) does it affect?
- [x] `frontend` (React SPA)
- [ ] `backend` (NestJS API)

---

## Description
This PR completes **Phase 4: UI Refactoring & UX**. It enhances the interactivity and feedback mechanisms of the Kanban board.

### Key Changes:
- **Inline Renaming:** Enabled editing task titles directly within the board.
- **Notification System:** Integrated `sonner` for professional toast notifications.
- **Async Feedback:** Implemented promise-based toasts for API updates and global fetch error handling.
- **UX Improvements:** Added loading spinners and enhanced error states with retry logic.

---

## How was this tested?
- [x] Manual verification of renaming logic and persistence.
- [x] Visual verification of toast notifications (Success/Error states).
- [x] Verification of loading spinner during fetch and updates.
