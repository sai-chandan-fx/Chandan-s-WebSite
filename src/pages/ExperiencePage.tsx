import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toTitleCase } from '@/lib/utils';

const toSlug = (str: string) => str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

// Map of experience category/slug pairs to Google Drive file IDs (main videos)
const videoMap: Record<string, string> = {
  'experience/scp--resonance': '1Q3_HBMR-PD_v3VSrvv8M0xJBAToo3YPW',
  'experience/d-square-vfx--internship': '1mG0B4YAxbAxRffLBHfDhL8PVI3QrsDoj',
  'experience/freelance-video-editing': '1sjW0q-4bZM07zckNVxLbPugbhvJMxj8a',
  'experience/udemy-course': '1-53xIthC_iv4DTRY4m6MycCIgSINynfZ',
  'experience/wafx-competition': '1o4wprEdd0UKkaQ9OFTWETeC78G2a2io0',
};

// Map of experience items to their descriptions
const descriptionMap: Record<string, string> = {
  'experience/scp--resonance': 'This trailer test effectively captures the cinematic tone and pacing of a professional film promo. Shot selection and sequencing build a clear narrative flow, supported by dynamic transitions. Visual effects and compositing are smoothly integrated, enhancing the drama without overpowering the footage. Sound design and background score align well with the visual rhythm, amplifying emotional impact. Text elements and titles are tastefully placed, adding to the storytelling without distraction. Color grading is consistent, giving the trailer a polished, cohesive look. Overall, it’s a compelling showcase of editing, compositing, and storytelling skills suitable for trailer or promo work. ',
  'experience/d-square-vfx--internship': 'During my internship at D Square VFX, I gained hands-on experience with professional VFX pipelines, industry-standard software, and collaborative workflows. This experience provided valuable insights into commercial VFX production and team-based project management.',
  'experience/freelance-video-editing': 'Freelance video editing projects encompass a diverse range of content creation, from promotional videos to narrative storytelling. These projects demonstrate versatility in editing styles, color grading, and post-production workflows across various genres.',
  'experience/udemy-course': 'Comprehensive VFX and video editing courses covering advanced techniques in After Effects, Premiere Pro, and industry best practices. These educational experiences provided structured learning in motion graphics, compositing, and professional workflow optimization.',
  'experience/wafx-competition': 'This certificate and trophy recognize S. Sai Chandan as the Zonal Runner-Up in the prestigious All India WAFX Challenge. The competition was organized under the Ministry of Information and Broadcasting, Government of India. It highlights excellence in VFX, celebrating creativity, technical skills, and storytelling. Chandan’s work stood out among entries from across the region, earning distinction in a competitive field. The award reflects advanced compositing and FX abilities, validated by industry-standard judging. Presented by ABAI and WAVES Festival 2025, it adds strong credibility to his professional portfolio. A symbol of dedication, talent, and emerging excellence in the Indian VFX community.',
};

// Map of experience items to their sub-items
const experienceItemsMap: Record<string, string[]> = {
  'experience/d-square-vfx--internship': ['Movie', 'Roto-1', 'Roto-2'],
  'experience/freelance-video-editing': ['Car', 'Drone', 'Event', 'Gym', 'Legs'],
  'experience/wafx-competition': ['Runnerup Certificate', 'Runnerup Trophy'],
};

// Map of experience sub-items to their Google Drive video IDs
const experienceSubVideoMap: Record<string, string> = {
  // D Square VFX Internship sub-items
  'experience/d-square-vfx--internship/movie': '1mG0B4YAxbAxRffLBHfDhL8PVI3QrsDoj',
  'experience/d-square-vfx--internship/roto-1': '1ieZZtrXBGvR7YDqJ-bzCuLA2riYURQju',
  'experience/d-square-vfx--internship/roto-2': '1wQ4l-0rpWAS9ZvXTkHyC8r9XZjgezIrK',

  // Freelance Video Editing sub-items
  'experience/freelance-video-editing/car': '1sjW0q-4bZM07zckNVxLbPugbhvJMxj8a',
  'experience/freelance-video-editing/drone': '1jn1GLVVNKEE9sIBtpcQR9DppfE4mZcHB',
  'experience/freelance-video-editing/event': '1PcIeE1BXCRdTT_Vt3NsE6gm5b6WEc5t0',
  'experience/freelance-video-editing/gym': '16O-VJfyqn7TR7nZz_Ai7vpT4j4V9-fHC',
  'experience/freelance-video-editing/legs': '1YMwvioPj0asljipU-_CtjRAe_6Thdjtl',

  // WAFX Competition sub-items
  'experience/wafx-competition/runnerup-certificate': '1o4wprEdd0UKkaQ9OFTWETeC78G2a2io0',
  'experience/wafx-competition/runnerup-trophy': '1uS2mKopGUQJmH02xjTFlyP8bXUsnaQOZ',
};

const experienceSubDescriptionMap: Record<string, string> = {
  // D Square VFX Internship sub-items
  'experience/d-square-vfx--internship/movie': 'This is a composite shot showing integration of multiple elements into a clean final output. It includes effective color matching, defocus control, and seamless layering. Tracking is stable, with elements sticking naturally to the background plate. Lighting consistency enhances the believability of the composite. Roto and cleanup work are invisible, as expected in high-quality VFX. The versioning suggests attention to feedback and iterative improvements. A strong example of production compositing work, suitable for demo reels. ',
  'experience/d-square-vfx--internship/roto-1': 'This shot demonstrates clean and precise rotoscoping of a moving subject. The edges are well-defined, with proper motion blur retained for realism. Hair detail and edge softness are handled smoothly where necessary. Foreground separation is consistent, showing frame-to-frame stability. Layer organization appears efficient for compositing use. Ideal for showcasing fundamental roto skills in a production-ready format. A technically sound example of manual roto work for VFX pipelines.',
  'experience/d-square-vfx--internship/roto-2': 'A continuation or alternate take featuring advanced rotoscoping techniques. The subject is cleanly isolated with accurate motion handling. Fine details like fingers or overlapping elements are managed well. Edge feathering and shape articulation are smooth and natural. This piece highlights strong attention to detail under motion complexity. Demonstrates readiness for roto tasks in live-action VFX integration. A solid sample for a junior compositor or roto artist portfolio. ',

  // Freelance Video Editing sub-items
  'experience/freelance-video-editing/car': 'This sequence features a car integration or enhancement with realistic shading and reflections. Tracking and match move are executed well to anchor the CG or altered content. Motion blur, shadows, and lighting match the live plate effectively. Rotoscoping around wheels and road contact shows high attention to detail. Color grading unifies all elements into a believable scene. Highlights compositing for automotive VFX or commercial work. An impressive blend of practical and digital elements.',
  'experience/freelance-video-editing/drone': 'This drone shot composite integrates CG or altered elements with a moving aerial plate. Camera tracking is smooth, with stable parallax and an environment lock. Foreground and background integration maintains depth and clarity. Color matching and grading enhance realism across different elements. Sky or object replacements (if applied) are done cleanly and naturally. The dynamic camera adds complexity, handled effectively. A strong display of environmental VFX and tracking skills.',
  'experience/freelance-video-editing/event': 'This event VFX shot includes digital additions like screens, lighting, or crowd effects. Tracking and stabilization ensure accurate placement of added assets. Screen or stage content is composited with clear perspective and grain match. Defocus and glow effects enhance realism under artificial lighting. Transitions and effects add energy without overwhelming the footage. A good showcase of event-based VFX and digital enhancement. Demonstrates attention to timing, visibility, and atmosphere.',
  'experience/freelance-video-editing/gym': 'This gym scene involves compositing tasks such as object removal, signage replacement, or environment cleanup. Tracking is steady even with moving foreground subjects. The integration is subtle but technically precise, ensuring realism. Lighting and color matches are well maintained in the composite area. Roto work is precise around human figures and gym equipment. Ideal for showcasing invisible VFX and cleanup proficiency. It reflects strong skills in environment enhancement under motion.',
  'experience/freelance-video-editing/legs': 'This shot demonstrates seamless leg rig removal with precise paint and cleanup work. The motion tracking is accurate, preserving natural movement and perspective. Roto and mask work are clean, especially around dynamic motion and shadows. Lighting and texture continuity are carefully preserved post-removal. Edge blending and motion blur integration maintain realism throughout. It’s a subtle yet technically demanding shot executed with care. Ideal for showcasing cleanup and advanced compositing skills.',

  // WAFX Competition sub-items
  'experience/wafx-competition/runnerup-certificate': 'This certificate and trophy recognize S. Sai Chandan as the Zonal Runner-Up in the prestigious All India WAFX Challenge',
  'experience/wafx-competition/runnerup-trophy': 'This certificate and trophy recognize S. Sai Chandan as the Zonal Runner-Up in the prestigious All India WAFX Challenge',
};

const ExperiencePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedSubItem, setSelectedSubItem] = useState<string | null>(null);
  
  // Create the key for map lookups
  const experienceKey = `experience/${slug}`;
  const mainVideoId = videoMap[experienceKey];
  const subItems = experienceItemsMap[experienceKey] || [];
  const description = selectedSubItem ? experienceSubDescriptionMap[`${experienceKey}/${toSlug(selectedSubItem)}`] : descriptionMap[experienceKey];

  // Determine which video to show
  const currentVideoId = selectedSubItem 
    ? experienceSubVideoMap[`${experienceKey}/${toSlug(selectedSubItem)}`] 
    : mainVideoId;

  const handleSubItemClick = (subItem: string) => {
    setSelectedSubItem(subItem);
  };

  const resetToMainVideo = () => {
    setSelectedSubItem(null);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <p className="text-sm text-primary">Experience</p>
          <CardTitle className="text-3xl font-bold">{toTitleCase(slug || '')}</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8">
          <div className="bg-brand-gray rounded-lg flex items-center justify-center aspect-video">
            {currentVideoId ? (
              <iframe
                src={`https://drive.google.com/file/d/${currentVideoId}/preview`}
                className="w-full h-full rounded-lg"
                allow="autoplay"
                title={`${toTitleCase(slug || '')} ${selectedSubItem ? `- ${selectedSubItem}` : ''} Video`}
              />
            ) : (
              <div className="text-center text-muted-foreground p-8">
                <p>Video not available.</p>
              </div>
            )}
          </div>
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Description</h3>
              <p className="text-muted-foreground">
                {description || `This is a placeholder description for the "${toTitleCase(slug || '')}" experience. More details about this project will be added here soon.`}
              </p>
            </div>
            
            {subItems.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Project Highlights</h3>
                <div className="space-y-2">
                  
                  {subItems.map((subItem) => (
                    <Button
                      key={subItem}
                      variant={selectedSubItem === subItem ? "default" : "outline"}
                      onClick={() => handleSubItemClick(subItem)}
                      className="w-full justify-start"
                    >
                      {subItem}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExperiencePage;