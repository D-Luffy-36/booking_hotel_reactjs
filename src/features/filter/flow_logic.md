
---

## 🔁 Logic Flow (Luồng dữ liệu)

```mermaid
flowchart TD
    A[👤 User tương tác Filter con] --> B[🌀 Filter con gọi onChange]
    B --> C[🧠 FilterGroup cập nhật filters state]
    C --> D["🔁 FilterGroup gọi onFilterChange với filters"]
    D --> E[📦 Component Cha nhận filters mới]
    E --> F[🌐 Gọi API hoặc lọc dữ liệu cục bộ]
    F --> G[🛏️ Render danh sách phòng mới]

