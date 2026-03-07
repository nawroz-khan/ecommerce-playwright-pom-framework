# 🛒 Ecommerce Playwright POM Automation Framework

## 📌 Project Overview

This project is an **End-to-End UI automation framework** built using **Playwright with JavaScript** following the **Page Object Model (POM)** design pattern.

The framework automates key workflows of an **Ecommerce web application**, including login, product selection, cart operations, checkout, wishlist management, and affiliate registration.

The goal of this project is to demonstrate **scalable test automation architecture, maintainability, and reusable test design** using modern automation tools.

---

# 🚀 Technologies Used

| Tool / Technology       | Purpose                 |
| ----------------------- | ----------------------- |
| Playwright              | UI automation framework |
| JavaScript (Node.js)    | Programming language    |
| Page Object Model (POM) | Test design pattern     |
| JSON                    | Test data management    |
| Playwright Test Runner  | Test execution          |
| HTML Reporter           | Test reporting          |
| Git & GitHub            | Version control         |

---

# 🏗 Framework Architecture

The framework follows a **Page Object Model structure** to separate test logic from UI locators.

```
ecommerce-playwright-pom-framework
│
├── pages
│   ├── AccountPage.js
│   ├── AffiliatePage.js
│   ├── CategoryPage.js
│   ├── CheckOutPage.js
│   ├── HomePage.js
│   ├── LoginPage.js
│   └── ProductPage.js
│
├── tests
│   ├── TC01_LaunchApplication.spec.js
│   ├── TC02_Login.spec.js
│   ├── TC03_AddToCart.spec.js
│   ├── TC04_CompletePurchase.spec.js
│   ├── TC05_AddToWishList.spec.js
│   └── TC06_AddAffiliate.spec.js
│
├── utils
│   └── CloudBerryStoreData.json
│
├── playwright.config.js
├── package.json
└── README.md
```

---

# 🎯 Key Features

✅ Page Object Model implementation
✅ Data-driven testing using JSON
✅ Reusable page classes
✅ Parallel test execution
✅ Playwright built-in reporting
✅ Clean and scalable framework structure

---

# 🧪 Automated Test Scenarios

| Test Case | Description                |
| --------- | -------------------------- |
| TC01      | Launch application         |
| TC02      | User login validation      |
| TC03      | Add product to cart        |
| TC04      | Complete purchase workflow |
| TC05      | Add product to wishlist    |
| TC06      | Register affiliate account |

---

# 📊 Test Data Management

Test data is stored in a **JSON file**:

```
utils/CloudBerryStoreData.json
```

Example:

```json
{
 "Sheet1": [
   {
     "username": "user1@gmail.com",
     "password": "password123"
   }
 ]
}
```

Tests dynamically read this data to execute **data-driven scenarios**.

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/ecommerce-playwright-pom-framework.git
```

### 2️⃣ Navigate to the project folder

```
cd ecommerce-playwright-pom-framework
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Install Playwright browsers

```
npx playwright install
```

---

# ▶️ Running Tests

### Run all tests

```
npx playwright test
```

### Run a specific test

```
npx playwright test tests/TC02_Login.spec.js
```

### Run tests in headed mode

```
npx playwright test --headed
```

---

# 📑 Test Reports

After execution, Playwright generates an **HTML test report**.

Open the report using:

```
npx playwright show-report
```

---

# 🔄 CI/CD Integration

This framework can be integrated with CI/CD tools such as:

* Jenkins
* GitHub Actions
* Azure DevOps

Automated pipelines can run regression tests on every code commit.

---

# 💡 Best Practices Implemented

* Page Object Model for maintainability
* Data-driven testing approach
* Modular test design
* Clean code structure
* Reusable automation utilities

---

# 👨‍💻 Author

**Nawroz Noori**

QA Automation Engineer specializing in:

* Playwright automation
* UI & API testing
* CI/CD automation
* Scalable test framework design

---

# ⭐ Future Improvements

* API automation integration
* Environment-based configuration
* Advanced reporting (Allure / Extent)
* Docker-based test execution
