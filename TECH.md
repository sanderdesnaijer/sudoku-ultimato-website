# Project: Sudoku Ultimato (Technical Deep Dive)

**Sudoku Ultimato** is a high-performance, variant-rich Sudoku platform built with Flutter. Unlike standard grid games, this project emphasizes deterministic procedural generation, non-blocking background computation, and a highly customizable user experience. It scales mathematically from simple 4x4 grids to complex 16x16 "Giant" puzzles and "Killer" variants.

## 🏗 System Architecture

The application follows a **Provider-based clean architecture**, separating the codebase into distinct layers:
*   **Repositories**: Interface with Firebase (Firestore) and local storage (Shared Preferences/Hive). Handles data persistence for game state, user statistics, and daily puzzle progress.
*   **Services**: Stateless, pure-logic components (e.g., `PuzzleGenerator`, `SudokuSolver`, `CageMerger`) that handle complex calculations. Many of these are designed to be isolate-friendly.
*   **Providers**: The `GameProvider` acts as the central state machine, managing the game lifecycle (`idle` → `loading` → `playing` → `won`) and orchestrating interactions between the inputs, the grid model, and the storage layer.

## ⚡️ Algorithmic Highlights

### 1. Deterministic Procedural Generation
Instead of relying on a database of pre-made puzzles, every level is generated on-the-fly using a **seeded constraint satisfaction algorithm**.
*   **Seed Stability**: A unique seed is derived from the `{GridSize, GameType, Difficulty, PuzzleID}` tuple. This ensures "Level 500" is identical for every user on every device, without needing a central database.
*   **Optimized Backtracking**: The solver uses a **"Most-Constrained-First"** heuristic, prioritizing cells with the fewest valid candidates. This drastically reduces the search space compared to naive row-by-row filling.
*   **16x16 Optimization**: For large grids where standard backtracking is $O(n!)$, the generator switches to a **Stack/Band Shuffling Algorithm**. It generates a valid base pattern and permutes rows/columns within their respective 4x4 boxes, allowing for instant generation of valid 16x16 grids.

### 2. Killer Sudoku Generation Pipeline
Generating valid Killer Sudoku puzzles (where cages sum to specific numbers) requires a multi-stage pipeline:
1.  **Solution Generation**: Create a valid filled grid.
2.  **Cage Merging**: Randomly group adjacent cells into cages using a disjoint-set style union approach (`CageMerger`).
3.  **Constraint Validation**: Ensure no cage contains duplicate digits (a rule of Killer Sudoku) and that the sum logic is mathematically consistent.
4.  **Drawing**: A custom `DynamicKillerCagePainter` renders the non-rectangular cage outlines and dashed lines efficiently using Dart's `Canvas` API.

## 🚀 Performance Engineering

*   **Isolate Offloading**: Puzzle generation and solving are computationally expensive. These tasks are offloaded to **Dart Isolates** `compute()`, preventing the UI thread from dropping frames during loading.
*   **Smart Rebuilding**: The `GameProvider` utilizes `ValueNotifier` for high-frequency updates (like the game timer) and `batchUpdate()` methods to coalesce multiple state changes into a single notification, minimizing widget rebuilds.
*   **Optimized Painting**: Complex overlays like selection highlights and Killer cages are drawn via custom painters that only repaint when specific dependencies change, rather than on every frame.

## 🛠 Feature Set & Customization

### Game Modes & Variants
*   **Grid Sizes**:
    *   **4x4 (Mini)**: Quick puzzles for beginners or kids.
    *   **9x9 (Classic)**: Standard Sudoku.
    *   **16x16 (Giant)**: Large-scale layouts for advanced solvers.
*   **Variants**: Classic Sudoku & Killer Sudoku (Sum Cages).

### Player Configuration (User Preferences)
The application exposes a granular settings model (`UserPreferences`) allowing players to tailor the engine to their playstyle:
*   **Input & Assist**:
    *   **Auto-Clear Notes**: Automatically removes pencil marks when a conflicting number is placed.
    *   **Prevent Invalid Notes**: Algorithmic check to stop users from placing pencil marks that don't belong.
    *   **Direct Control Mode**: Toggles between "Cell-First" (Select Cell → Tap Number) and "Number-First" (Select Number → Tap Cells) input paradigms.
    *   **Number Pad Counts**: dynamically tracks and displays how many instances of each number are left to find.
*   **Accessibility & Interface**:
    *   **Zoom Controls**: Standard pinch-to-zoom plus optional on-screen +/- buttons for precision.
    *   **Haptic Feedback**: Tuned vibration patterns for inputs and errors.
    *   **Theme System**: Full support for Dark Mode, Light Mode, and System Default, with custom color palettes for high contrast.
    *   **Landscape Mode**: Responsive layout logic that adapts the HUD for horizontal play.
*   **Social & Progression**:
    *   **Online Leaderboards**: Opt-in comparison with global player stats.
    *   **Daily Puzzles**: A specialized calendar-based mode (`DailyPuzzleRepository`) tracking unique daily streaks.

## 💻 Tech Stack

*   **Framework**: Flutter (Dart)
*   **State Management**: Provider
*   **Backend**: Firebase (Firestore for stats, App Check for security)
*   **Testing**: Integration Tests with automated screenshot generation for App Store locales.
*   **Localization**: `flutter_localizations` with ARB files for multi-language support.
