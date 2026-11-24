# Zero-Day Cyberattack Detection Using Hybrid Supervised and Unsupervised Machine Learning

A machine learning-based network intrusion detection project that combines supervised and unsupervised learning techniques to identify known malicious traffic and investigate potentially unseen attack patterns.

## Project Overview

Traditional intrusion detection systems often depend on previously labelled attack patterns. This makes identifying unfamiliar attack behaviour challenging.

This project explores a hybrid machine learning approach that combines supervised classification with unsupervised anomaly detection.

The supervised models learn patterns from labelled network traffic, while the unsupervised model identifies traffic that differs from normal behaviour.

The project uses the CIC-IDS2017 dataset for network traffic analysis and model evaluation.

## Objectives

- Analyse network traffic and identify patterns associated with malicious activity.
- Apply preprocessing and feature selection to prepare data for machine learning.
- Train and compare supervised classification models.
- Use unsupervised anomaly detection to identify unusual network behaviour.
- Evaluate model performance using standard classification metrics.
- Examine model generalisation on an attack category withheld from supervised training.

## Machine Learning Approach

### 1. Supervised Learning

The supervised models learn from labelled network traffic.

Models used:
- Random Forest
- XGBoost

### 2. Unsupervised Learning

Isolation Forest is used to identify unusual network traffic without relying entirely on attack labels.

### 3. Hybrid Detection

The project explores combining supervised predictions with anomaly detection to investigate whether the hybrid approach can identify traffic that may not match previously learned attack patterns.

## Dataset

**CIC-IDS2017**

The CIC-IDS2017 dataset contains network traffic records representing benign activity and different types of cyberattacks.

The dataset is used for:
- Network traffic analysis
- Data preprocessing
- Feature selection
- Model training
- Model evaluation

**Note:** The original dataset is not included in this repository because of its large size. Obtain it separately from the official CIC dataset source before running the notebook.

Dataset source: https://www.unb.ca/cic/datasets/ids-2017.html

## Methodology

The project follows these major steps:

1. Load and inspect the network traffic dataset.
2. Perform data cleaning and preprocessing.
3. Handle missing values using median imputation.
4. Apply feature scaling and feature selection.
5. Train supervised machine learning models.
6. Train an Isolation Forest anomaly detection model.
7. Explore the hybrid detection approach.
8. Evaluate performance on validation and held-out traffic.
9. Generate confusion matrices and evaluation result files.

## Performance Evaluation

The models are evaluated using:

| Metric | Purpose |
|---|---|
| Accuracy | Overall prediction correctness |
| Precision | Correctness of positive predictions |
| Recall | Ability to identify positive samples |
| F1-Score | Balance between precision and recall |
| ROC-AUC | Ability to distinguish between classes |
| False Positive Rate | Proportion of normal traffic incorrectly flagged |

The repository includes CSV files containing model comparisons, validation results, held-out traffic results and confusion matrices.

## Unseen Attack Evaluation

An important part of this project is examining performance on PortScan traffic withheld from supervised training.

This experiment is intended to investigate how the trained models behave when evaluated on an attack category they were not trained to classify.

**Important limitation:** Detecting an attack category withheld from training is an experimental test of generalisation. It does not establish reliable detection of all real-world zero-day vulnerabilities or previously unknown attacks.

## Repository Structure

```text
Zero-Day-Cyberattack-Detection/
│
├── Zero_Day_Cyberattack/
│   └── Zero_Day_Cyberattack_Detection (2).ipynb
│
├── output/
│   └── final_results/
│       ├── validation_model_comparison.csv
│       ├── heldout_known_traffic_results.csv
│       ├── XGBoost_heldout_confusion_matrix.csv
│       ├── withheld_portscan_results.csv
│       ├── Two_Stage_Hybrid_heldout_confusion_matrix.csv
│       └── validation_confusion_matrix.csv
│
└── .gitignore
```

## Technologies Used

- Python
- Jupyter Notebook
- Pandas
- NumPy
- Scikit-learn
- XGBoost
- Matplotlib
- Seaborn
- Joblib
- Git and GitHub

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/ap24110011024/Zero-Day-Cyberattack-Detection.git
```

### 2. Navigate to the project

```bash
cd Zero-Day-Cyberattack-Detection
```

### 3. Create a virtual environment

```bash
python -m venv .venv
```

Activate it on macOS:

```bash
source .venv/bin/activate
```

### 4. Install the required libraries

```bash
pip install numpy pandas scikit-learn xgboost matplotlib seaborn joblib jupyter
```

### 5. Obtain the dataset

Download CIC-IDS2017 separately and update the dataset paths in the notebook to match your local dataset location.

### 6. Launch Jupyter Notebook

```bash
jupyter notebook
```

Open:

`Zero_Day_Cyberattack/Zero_Day_Cyberattack_Detection (2).ipynb`

Run the notebook cells in sequence.

## Current Limitations

- The original dataset is not stored in the repository.
- Saved model files are excluded to keep the repository lightweight.
- Performance on withheld attack categories requires careful interpretation.
- Unsupervised anomaly detection can produce false positives.
- Further testing on independent datasets and real-world network traffic is needed.

## Future Improvements

- Improve detection performance on previously unseen attack categories.
- Reduce false positive rates.
- Evaluate the system on additional network intrusion datasets.
- Improve the hybrid detection strategy.
- Explore real-time network traffic monitoring.
- Add a user-friendly interface for analysing predictions.

## Authors

- Mohanasritha Eerla
- Mounya Sri
- Jahnavi
- Harika Lakshmi Sai

## Project Type

Academic Machine Learning Project

**Repository:** https://github.com/ap24110011024/Zero-Day-Cyberattack-Detection
