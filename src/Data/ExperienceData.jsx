import {contentData} from '@data/Data.json'
export const data = [
  {
    title: "Aug, 2024 - Nov, 2024",
    content: (
      <div>
        <div className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
          {contentData.systemsLimited.description}
          <br />
          <ul className="list-disc list-inside mt-2">
            {contentData.systemsLimited.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {contentData.systemsLimited.images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "March, 2024 - July, 2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
          {contentData.upwork.description}
        </p>
        <div className="grid grid-cols-2 gap-4">
          {contentData.upwork.images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Aug, 2023 - Feb, 2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal mb-4">
          {contentData.bitbash.description}
        </p>
        <div className="mb-8">
          {contentData.bitbash.achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm"
            >
              ✅ {achievement}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {contentData.bitbash.images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          ))}
        </div>
      </div>
    ),
  },
];