
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toTitleCase } from '@/lib/utils';

const toSlug = (str: string) => str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

// Map of experience category/slug pairs to Google Drive file IDs (main videos)
const videoMap: Record<string, string> = {
  'experience/scp-resonance': 'MAIN_SCP_RESONANCE_VIDEO_ID',
  'experience/d-square-vfx-internship': 'MAIN_D_SQUARE_VIDEO_ID',
  'experience/freelance-videoediting': 'MAIN_FREELANCE_VIDEO_ID',
  'experience/udemy-course': 'MAIN_UDEMY_VIDEO_ID',
  'experience/wafx-competition': 'MAIN_WAFX_VIDEO_ID',
};

// Map of experience items to their descriptions
const descriptionMap: Record<string, string> = {
  'experience/scp-resonance': 'SCP – Resonance is a comprehensive visual effects project that showcases advanced compositing techniques, particle systems, and cinematic storytelling. This project demonstrates expertise in creating atmospheric effects, dynamic lighting, and immersive visual narratives.',
  'experience/d-square-vfx-internship': 'During my internship at D Square VFX, I gained hands-on experience with professional VFX pipelines, industry-standard software, and collaborative workflows. This experience provided valuable insights into commercial VFX production and team-based project management.',
  'experience/freelance-videoediting': 'Freelance video editing projects encompass a diverse range of content creation, from promotional videos to narrative storytelling. These projects demonstrate versatility in editing styles, color grading, and post-production workflows across various genres.',
  'experience/udemy-course': 'Comprehensive VFX and video editing courses covering advanced techniques in After Effects, Premiere Pro, and industry best practices. These educational experiences provided structured learning in motion graphics, compositing, and professional workflow optimization.',
  'experience/wafx-competition': 'WAFX Competition entry showcasing creative problem-solving and technical innovation in visual effects. This competitive project demonstrates ability to work under constraints while delivering high-quality, original content that stands out in the industry.',
};

// Map of experience items to their sub-items
const experienceItemsMap: Record<string, string[]> = {
  'experience/scp-resonance': ['Behind the Scenes', 'VFX Breakdown', 'Making Process', 'Final Render', 'Sound FX Integration'],
  'experience/d-square-vfx-internship': ['Projects Overview', 'Skills Learned', 'Team Collaboration', 'Final Presentation', 'Workflow Mastery'],
  'experience/freelance-videoediting': ['Client Projects', 'Creative Process', 'Post-Production', 'Color Grading', 'Final Delivery'],
  'experience/udemy-course': ['Course Content', 'Assignments', 'Techniques Learned', 'Portfolio Pieces', 'Certification'],
  'experience/wafx-competition': ['Competition Entry', 'Creative Brief', 'Technical Challenges', 'Judging Process', 'Final Results'],
};

// Map of experience sub-items to their Google Drive video IDs
const experienceSubVideoMap: Record<string, string> = {
  // SCP Resonance sub-items
  'experience/scp-resonance/behind-the-scenes': 'SCP_BTS_VIDEO_ID',
  'experience/scp-resonance/vfx-breakdown': 'SCP_BREAKDOWN_VIDEO_ID',
  'experience/scp-resonance/making-process': 'SCP_MAKING_VIDEO_ID',
  'experience/scp-resonance/final-render': 'SCP_FINAL_VIDEO_ID',
  'experience/scp-resonance/sound-fx-integration': 'SCP_SOUND_VIDEO_ID',
  
  // D Square VFX Internship sub-items
  'experience/d-square-vfx-internship/projects-overview': 'DSQUARE_PROJECTS_VIDEO_ID',
  'experience/d-square-vfx-internship/skills-learned': 'DSQUARE_SKILLS_VIDEO_ID',
  'experience/d-square-vfx-internship/team-collaboration': 'DSQUARE_TEAM_VIDEO_ID',
  'experience/d-square-vfx-internship/final-presentation': 'DSQUARE_PRESENTATION_VIDEO_ID',
  'experience/d-square-vfx-internship/workflow-mastery': 'DSQUARE_WORKFLOW_VIDEO_ID',
  
  // Freelance Video Editing sub-items
  'experience/freelance-videoediting/client-projects': 'FREELANCE_CLIENTS_VIDEO_ID',
  'experience/freelance-videoediting/creative-process': 'FREELANCE_CREATIVE_VIDEO_ID',
  'experience/freelance-videoediting/post-production': 'FREELANCE_POST_VIDEO_ID',
  'experience/freelance-videoediting/color-grading': 'FREELANCE_COLOR_VIDEO_ID',
  'experience/freelance-videoediting/final-delivery': 'FREELANCE_DELIVERY_VIDEO_ID',
  
  // Udemy Course sub-items
  'experience/udemy-course/course-content': 'UDEMY_CONTENT_VIDEO_ID',
  'experience/udemy-course/assignments': 'UDEMY_ASSIGNMENTS_VIDEO_ID',
  'experience/udemy-course/techniques-learned': 'UDEMY_TECHNIQUES_VIDEO_ID',
  'experience/udemy-course/portfolio-pieces': 'UDEMY_PORTFOLIO_VIDEO_ID',
  'experience/udemy-course/certification': 'UDEMY_CERT_VIDEO_ID',
  
  // WAFX Competition sub-items
  'experience/wafx-competition/competition-entry': 'WAFX_ENTRY_VIDEO_ID',
  'experience/wafx-competition/creative-brief': 'WAFX_BRIEF_VIDEO_ID',
  'experience/wafx-competition/technical-challenges': 'WAFX_CHALLENGES_VIDEO_ID',
  'experience/wafx-competition/judging-process': 'WAFX_JUDGING_VIDEO_ID',
  'experience/wafx-competition/final-results': 'WAFX_RESULTS_VIDEO_ID',
};

const ExperiencePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedSubItem, setSelectedSubItem] = useState<string | null>(null);
  
  // Create the key for map lookups
  const experienceKey = `experience/${slug}`;
  const mainVideoId = videoMap[experienceKey];
  const description = descriptionMap[experienceKey];
  const subItems = experienceItemsMap[experienceKey] || [];

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
                  <Button
                    variant={selectedSubItem === null ? "default" : "outline"}
                    onClick={resetToMainVideo}
                    className="w-full justify-start"
                  >
                    Main Overview
                  </Button>
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
