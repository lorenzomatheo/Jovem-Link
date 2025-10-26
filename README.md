# Jovem Link

## Project Description

Jovem link is a web application designed to help users discover social benefits tailored to their profile. The application guides users through an interactive questionnaire to gather relevant information, such as whether they are a student or responsible for one. Based on the provided answers, it presents personalized recommendations for available benefits.

Key features include:

*   **Personalized Benefit Recommendations:** Users receive a curated list of social benefits based on their questionnaire responses.
*   **Interactive Questionnaire:** A multi-step questionnaire helps to build a user profile.
*   **CRAS Map Integration:** Users can locate nearby CRAS (Centro de Referência de Assistência Social) units, especially useful for validating social registries like CadÚnico.
*   **Document Management:** A dedicated section for managing and accessing relevant documents.
*   **Alerts and Deadlines:** Notifies users about important deadlines and alerts related to their benefits.
*   **Quick FAQ:** Provides quick answers to frequently asked questions.
*   **Tag-based Filtering:** Users can filter benefit recommendations using relevant tags.

This application aims to simplify the process of finding and accessing social assistance programs, making it more accessible and user-friendly.

## Members

*   lucas Pisaneschi Speranzini/lucaspisaneschi4@gmail.com
*   Lorenzo Matho/lorenzo.matheo@hotmail.com
*   Rafael Fassini Menoce/fassinimenocerafael@gmail.com
 

## Setup and Usage Instructions

To get this project up and running on your local machine, follow these steps:

### Prerequisites

*   Node.js (LTS version recommended)
*   Bun (package manager)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/lorenzomatheo/Jovem-Link.git
    cd build-a-screen-biz
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

### Running the Development Server

To start the development server:

```bash
bun run dev
```

The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

To create a production-ready build:

```bash
bun run build
```

The build artifacts will be located in the `dist/` directory.

### Linting

To run the linter:

```bash
bun run lint
```

### Previewing the Production Build

To preview the production build locally:

```bash
bun run preview
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
