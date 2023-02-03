const faqs = [
    {
        id: 1,
        question: "What's the best careers in cambodia?",
        answer:
            "Any job is good. But it's up to you to decide what you like and what you do.",
    },
    {
        id: 2,
        question: "What is careerkh?",
        answer:
            "CareerKh is a platform build on website base that provide career information, right requirement, skills, roadmap and forum.",
    },
    {
        id: 3,
        question: "Who is behind Careerkh development?",
        answer:
            "A group of student from RUPP, FE, ITE, G7 A that build this website to complate course.",
    },
  

]

export default function FAQ() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-12 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Frequently asked questions</h2>
                <div className="mt-12">
                    <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-3">
                        {faqs.map((faq) => (
                            <div key={faq.id}>
                                <dt className="text-lg font-medium leading-6 text-gray-900">{faq.question}</dt>
                                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
