# Capstone Analysis — AI Art & Emotion

This folder contains the core analytical notebooks for the capstone project **"Emotion in AI-Generated Art"**, which investigates how visual features (color, style, composition) in AI-generated artwork correlate with perceived emotional responses.

---

## Notebooks

### 1. `EDA_Color_Emotion_Analysis.ipynb`
**Comprehensive EDA & Statistical Analysis of Color–Emotion Patterns**

This is the primary analysis notebook. It covers:

- **Dataset loading** — Pulls the `EmoArt-5k` subset from HuggingFace (`printblue/EmoArt-5k`) and parses structured description fields (dominant emotion, valence, arousal, art style, region).
- **Emotion distribution** — Bar charts and chi-square tests to assess whether emotions are uniformly distributed or significantly skewed (they are: awe, calm, and contentment dominate).
- **Valence/Arousal breakdown** — Counts positive vs. negative valence and high vs. low arousal across the dataset.
- **Color lexicon extraction** — Builds an expanded color lexicon (~20 color families) and detects color mentions in AI-generated artwork descriptions.
- **Color–emotion correlation** — Tests which color families are significantly associated with specific emotions using chi-square and false discovery rate (FDR) correction via Benjamini-Hochberg.
- **Warm vs. cool color patterns** — Compares arousal and valence distributions across warm (red, orange, yellow) vs. cool (blue, green, purple) color palettes.
- **Color versatility** — Identifies which colors span multiple emotional contexts vs. which are emotion-specific.
- **Style × Emotion contingency** — Chi-square tests to detect whether art style (e.g., impressionism, realism, abstract) predicts emotional category.
- **Regional bias analysis (Eastern vs. Western)** — Stratified analysis comparing color-emotion associations in Eastern art styles (Chinese ink, Ukiyo-e) vs. Western styles, revealing cultural differences in emotional encoding.
- **Visual attribute extraction** — Parses structured fields (brushstroke, composition, lighting) to test whether formal artistic elements correlate with emotion.

**Key findings preview:** Color is a statistically significant predictor of emotion; warm colors correlate with excitement/awe while cool colors correlate with calm/sadness. Eastern and Western art encode the same emotions through different color vocabularies.

---

### 2. `EmoArt_130K_Dataset_Exploration.ipynb`
**130K Dataset Access & Structure Exploration**

This notebook documents the early-stage data engineering work to access the full `EmoArt-130K` dataset:

- **Direct JSON download** — Fetches `Annotation.json` from HuggingFace via the `requests` library to inspect metadata structure (`request_id`, `description`, `image_path`).
- **Streaming dataset access** — Loads the full 130K dataset in streaming mode to avoid memory constraints; confirms raw data format (JPEG images as `.tar` streams, no embedded JSON per record).
- **HuggingFace Hub file retrieval** — Uses `hf_hub_download` to locate annotation files within the repo.
- **Parsing attempts** — Explores different strategies for pairing image bytes with annotation metadata, surfacing schema mismatches between the streaming `.jpg`-only records and the separate JSON annotation file.

**Purpose:** Groundwork notebook — establishes the dataset schema and access patterns before scaling to the full 130K sample for downstream analysis.

---

### 3. `Artist_Attribution_Model.ipynb`
**Product Model — Artist Style Classification via CNN**

This notebook builds a computer vision model to classify paintings by artist, using the WikiArt-style dataset:

- **Dataset loading** — Reads `all_data_info.csv`, which includes artist name, genre, and train/test split labels for a large painting dataset.
- **Top artist selection** — Filters to the 11 most represented artists (Chagall, Dali, Picasso, Delacroix, Rembrandt, van Gogh, Goya, Modigliani, Pissarro, Renoir, Degas) and balances class sizes.
- **Label encoding** — Uses `sklearn.preprocessing.LabelEncoder` to map artist names to integer labels.
- **Image preprocessing pipeline** — Defines `image_transformer_nn()`, a function that resizes images to 224×224, optionally normalizes pixel values, and applies center-cropping — standard preprocessing for CNN-based transfer learning.
- **Feature extraction setup** — Lays the groundwork for feeding preprocessed images into a neural network backbone for style-based classification.

**Purpose:** Investigates whether artist attribution (a proxy for visual style) can be modeled from raw pixels — a stepping stone toward style-conditioned emotion prediction.

---

## Project Context

These notebooks are part of a broader capstone that:
1. Collects and processes AI-generated artwork with structured emotion annotations
2. Statistically validates whether color and style are predictive of perceived emotion
3. Tests for cultural bias in emotion labeling (Eastern vs. Western aesthetic traditions)
4. Explores machine learning models for style-conditioned emotion prediction

The interactive visualization layer is in the [`AI Art Emotion Analysis (2)/`](../AI%20Art%20Emotion%20Analysis%20(2)/) React/Vite application.
