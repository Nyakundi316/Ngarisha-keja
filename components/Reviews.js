import { getApprovedReviews, company } from "@/lib/site";

export default function Reviews() {
  const approvedReviews = getApprovedReviews();
  const reviewUrl = company.reviewRequestUrl || company.googleBusinessProfileUrl;
  if (!approvedReviews.length && !reviewUrl) return null;

  if (!approvedReviews.length) {
    return (
      <section className="py-16">
        <div className="container-px text-center">
          <p className="eyebrow">Customer feedback</p>
          <h2 className="mt-4 font-display text-2xl font-bold text-navy">Share your experience</h2>
          <p className="mx-auto mt-3 max-w-lg text-slatey">If we have helped you, we would value an honest review.</p>
          <a href={reviewUrl} target="_blank" rel="noopener noreferrer" className="btn-outline mt-6" data-track-event="review_link_click" data-track-source="review_invitation">Leave a review</a>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container-px">
        <h2 className="font-display text-2xl font-bold text-navy">Customer reviews</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {approvedReviews.map((review) => (
            <article key={review.id} className="rounded-card border border-line bg-white p-6 shadow-soft">
              <p className="text-sm leading-relaxed text-ink">“{review.text}”</p>
              <p className="mt-4 text-sm font-semibold text-navy">{review.displayName}</p>
              <p className="mt-1 text-xs text-slatey">{review.rating ? `${review.rating}/5 · ` : ""}{review.source} · {review.reviewDate}</p>
              {review.sourceUrl && <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer" data-track-event="review_link_click" className="mt-3 inline-flex text-xs font-semibold text-teal-dark underline">View source</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
