# Explorer Feed — User Stories & Acceptance Criteria

## 1. **As a Gen Z Explorer, I want to browse short-form car videos so I can visually explore cars without using filters.**

**Acceptance Criteria**

* User lands on a vertically scrollable feed with 15–30s clips.
* Each tile contains: video, make/model/year, price, mileage, and 1–2 lifestyle tags.
* Swiping up/down loads the next tile instantly with <200ms latency.
* Autoplay begins muted; tapping enables sound.
* At least one actionable element is present (“Save”, “Learn More”, “Fit Score”).
* Feed continues indefinitely until inventory is exhausted.

---

## 2. **As a user, I want the feed content to be personalized based on my behavior so the recommendations improve quickly.**

**Acceptance Criteria**

* Likes, skips, and completed video views update a lightweight recommender.
* Within the first 20–30 interactions, the system adjusts the distribution of body styles, budgets, and segments.
* Personalization rules persist across sessions for logged-in users.
* For logged-out users, session-based personalization remains until the session ends.
* Users can reset personalization in Settings → “Restart My Explorer Feed”.

---

## 3. **As a user, I want to save cars I like so I can return to them later.**

**Acceptance Criteria**

* Tapping the “Save” icon immediately adds the VIN to the Saved list.
* The bookmark icon updates visually within 100ms.
* Saved cars appear in the Saved tab and sync with the main CarMax account.
* Removing a saved vehicle updates both the feed tile and Saved list instantly.

---

## 4. **As a user, I want to open a vehicle detail page (VDP) directly from a tile so I can get full specifications.**

**Acceptance Criteria**

* Tapping “Learn More” loads the VDP in the same app shell.
* Video pause/resume state persists if user returns to the feed.
* VDP shows price, photos, specs, CarMax quality certs, financing, and availability.
* “Back to Feed” returns user to the exact tile and scroll position.

---

## 5. **As a user, I want a “Fit Score” that explains whether a car matches my needs so I feel confident browsing.**

**Acceptance Criteria**

* Fit Score appears as a simple A/B/C grade or 0–100.
* Tapping reveals 2–3 reasons (budget alignment, use-case match, mileage range).
* Score uses only safe, explainable factors (no protected characteristics).
* Fit Score never overrides price or eligibility constraints.

---

## 6. **As a user, I want educational micro-videos interspersed in the feed so I can learn important concepts without leaving.**

**Acceptance Criteria**

* An educational tile appears approximately every 8–10 tiles.
* Topics include APR basics, mileage ranges, trim differences, hybrid vs gas.
* Tiles are clearly labeled as “Learning Breaks”.
* They never link to external websites; they open in an in-app modal.

---

## 7. **As a CarMax associate, I want to see what a customer has liked or saved so I can help them efficiently in-store.**

**Acceptance Criteria**

* Saved vehicles sync to the associate view automatically.
* Associates can filter by “Recent Saves” or “Session Likes”.
* No behavioral data beyond likes/saves is exposed to maintain privacy.
* Store app loads the vehicles instantly with price and availability.

---

## 8. **As a marketer, I want to introduce new themes (City Life, Adventure, Luxury Lite) into the feed so campaigns run smoothly.**

**Acceptance Criteria**

* Feed supports theme filters accessible at the top (“For You”, “Adventure”, “Commuter”).
* Tiles within a theme show vehicles that match curated lifestyle tags.
* Changing a theme instantly refreshes the feed with no more than 150ms delay.
* Themes are independently trackable for engagement and conversion.

---

## 9. **As a product manager, I need a KPI funnel so I can measure how Explorer Feed drives conversions.**

**Acceptance Criteria**

* Tracking events include: Feed Impressions → Tile Views → VDP Views → Saves → Inquiries → Sales.
* Funnels can be viewed by segment (Gen Z, logged-in, new user).
* Metrics update daily and highlight significant deltas (>15%) automatically.
* KPIs are exportable to CSV from the internal dashboard.

---

## 10. **As a user, I want to view only in-stock, purchase-ready vehicles so I don’t waste time.**

**Acceptance Criteria**

* Vehicles flagged “pending sale” or “unavailable” never appear in the main feed.
* If availability changes mid-session, the tile updates within 5 minutes.
* Inventory reflects real-time store data (<15-min delay).
* Out-of-stock vehicles can appear only inside “Learning” contexts—not as actionable purchase options.

---

## 11. **As a content operator, I want to upload new vehicle videos quickly so I can keep the feed fresh.**

**Acceptance Criteria**

* Operators can upload clips via web dashboard or automated studio ingestion.
* System auto-generates thumbnails, tags, and metadata.
* Videos pass automatic quality checks (blur, audio level, brand safety).
* Publishing a video associates it to a VIN or lifestyle tag.

---

## 12. **As a user, I want sponsored tiles to be clearly labeled so I trust the platform.**

**Acceptance Criteria**

* Sponsored tiles appear no more than 1 in every 10 tiles.
* Labels read “Sponsored” in top-left with consistent styling.
* Sponsored tiles must follow identical video/interaction rules as organic tiles.
* Users can report an ad; reporting triggers an internal moderation queue.

---

## 13. **As a privacy-conscious user, I want to understand how my behavior data is used so I feel safe.**

**Acceptance Criteria**

* Personalization data is summarized in a simple “How Explorer Feed Works” panel.
* Users can opt-out of personalization entirely.
* Opt-out resets recommendation history and freezes feed rules to non-personal presets.
* Data is never shared externally or sold.

---

## 14. **As a user, I want the feed to work the same on the CarMax app and mobile web so the experience feels cohesive.**

**Acceptance Criteria**

* UI layout matches across app and mobile web with responsive adjustments.
* Performance targets (latency, scroll FPS) remain the same.
* Videos load via a shared media backend with identical quality settings.
* Saved cars sync across all platforms.

---

## 15. **As a business stakeholder, I want early-market pilot reporting so I can decide whether to scale Explorer Feed.**

**Acceptance Criteria**

* Pilot report includes: engagement metrics, conversion lift, revenue lift, operational bandwidth.
* Comparison against control markets.
* Clear recommendations for national rollout or additional testing.
* Visualization of funnel improvements quarter-to-quarter.

---

## 16. **As a QA engineer, I want stable empty states so the experience doesn’t break when the feed is sparse.**

**Acceptance Criteria**

* When inventory <10 vehicles, the feed gracefully displays an “Inventory Refreshing” message.
* Educational tiles still show.
* No infinite loading spinners.
* No hard errors if a video fails; tile displays a fallback image.

---

## 17. **As a user, I want quick, seamless transitions so the feed feels fast and modern.**

**Acceptance Criteria**

* Vertical transitions hit 60fps on modern devices.
* No more than 1 dropped frame per tile transition on average.
* Preload logic fetches next 2 tiles in the background.
* Video caching minimizes re-buffering when scrolling back.

---

## 18. **As a marketer, I want to test multiple creatives for campaigns promoting Explorer Feed so I know what works.**

**Acceptance Criteria**

* A/B test harness supports at least two treatments per market.
* Metrics include CTR, conversion to app install, and activation to first feed session.
* Tests automatically end when statistical confidence >95%.
* Results appear in a simple internal dashboard.

