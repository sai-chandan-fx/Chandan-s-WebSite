
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toTitleCase } from '@/lib/utils';
import { useEffect } from 'react';

// Map of category/slug pairs to Google Drive file IDs
const videoMap: Record<string, string> = {
  // Composition videos
  'composition/super-bike': '1Wx9lCJ5FJCi0Q3E65PfPWaw3k3nGceqd',
  'composition/marvel-10': '1IU3JGZBknB2W50FmZPOzn4BIPIIB8sQB',
  'composition/electro-blast': '14wMYFf7nGHRxhfmoqol21PaEeAwTBynM',
  'composition/snow': '1PO9LhigfaJvHawNmcdypjYEPZtSJOHYR',
  'composition/aurora': '1QeZvG6SLBJZ0cP7yyc6A5xxU7XoPuoDE',
  'composition/christmas': '1Az9Fk00hbYYqLbzmjaDhB3ax2-VXXU6x',
  'composition/apple-disintegrate-effect': '1vg-iSO5hnCjQhlBy3S4NSMY80sa_Spqh',
  'composition/car-cgi': '1Cu--oIzSxV5GQDwvKLepFTa2V5nDXzCD',
  'composition/shazam': '1M8iyr3KVUToRtJT8Mfv-IdU2H1K0VTa3',
  'composition/smart-vector': '1TCfeW2WxA8bZxmHiqBz9LDQ1Oup_tCVY',
  'composition/dr-strange': '1LCwJZHuWTE0BJneXi6u3W74cf2rAvPsA',
  'composition/camera-ghost': '1Y7-DdaDr26A1d7K1-rCrTBIbBmVKQqHJ',
  'composition/ben-10': '1YWSjPRpq2vUjZ6MVyBLAl_RpJuDQV-Vb',
  'composition/watch-ads': '1w8lQ6V09fxVFgHJnvtRSaL17q3cbLIZ2',
  // FX videos
  'fx/dancing-girl': '14ZKvszovL6uPOB6xcByJ5FG5-yZ_I83o',
  'fx/force-field': '1CrGtZa0QvGFC1z4fFZVkkcMJdhJBqsd3',
  'fx/mewtwo-shadow-ball': '18FrkVc4nmBGMbyjJ_oxolLeMb7jxVAlz',
  'fx/snow': '1OttY22XKubCMoarCDtrn80VieLovNbv0',
  'fx/fire-pose': '1XuE8SddNWIdrMmkmoDvLWBIIYerX25HC',
  'fx/fire-kick': '1nDaxDiBTjEy_gDeFVOQNqmVcR8ZG6TZ0',
  'fx/tornado': '1pBOSsa0OlpeUECXHuhS-JBK393A9UOOk',
  'fx/flare-gun': '1_aLPScWT8ki_So818qyqRbfj4CZygptK',
  'fx/growth-fx': '1cdt2Pw39uDh0ZgRlxeBxNzya3RU2cGPX',
  'fx/godzilla-fx': '1gknA75mihnQ7wCpIbdGEbfXWNd7Hec4e',
  'fx/vellum-hair': '1NTqDr4-ZngaIufZpU-Mezkht_Xa7pgkR',
  'fx/spawn-fx': '10CLx7vEcYqp2hF7wPror1tYnMNE3GK3F',
  'fx/cloud-img': '1DK64G7mnqQvQnAkadjOL623jQfXe__BI',
  'fx/portal': '1rDz2fqXAfxegioEcAYQ3FDmCj7dhLuXR',
  'fx/river-sim': '1vhASqVQ5NEabafDyM0_xXPMDkX-7A5aL',
  'fx/dust-shockwave': '145BBkuxh3W_L3nDSWlGdePLxaCFp2Dz6',
  'fx/wall-breaking': '1ldiIneuMJcZ-P4z5OeL2BHyLm8y2og0r',
  
  // Show Reels videos
  'show-reels/composition-reel': '1qztXoE2i0K1RCQYwDwIR24SngaAh8NOj',
  'show-reels/fx-reel': '11Eh5V77QtsmxpfoPxiNKIEAf1IYmP3V5',
  'show-reels/screen-replacement': '1FtmqZhyT1H9liP8zjBNOLBYAu5V__w7r',

  //Motion Graphics videos
  'motion-graphics/cube-animation': '13nH7enbHkAADyCqOqSE4p_duyOfpgF9L',
  'motion-graphics/evil-dead': '1seawGT8zSuUo-Akx7GUM12QXBZdSIqnL',
  'motion-graphics/dance-effect': '1VWGwDwhOOBSqe3yr0b5NGFxnUu9jiPJJ',
  'motion-graphics/kgf': '1lCgIt6UYKXz8068HuN0xJCpLBl7BTmsO',
  'motion-graphics/music': '1rKNyhn6_kXrzyRq1v8TjMLU3fhZFTbtz',
};

// Map of project items to their descriptions
const descriptionMap: Record<string, string> = {
  // Composition projects
  'composition/super-bike': 'This shot includes a CG or enhanced motorbike, possibly composited into live action.  Tracking and lighting reflect motion accurately with believable shadow casting.  Roto and edge blending are clean, even at high speed.  Motion blur and reflections are applied to realism.  Color tone and contrast integrate well with the environment.  A high-energy scene that showcases CG vehicle compositing.  Ideal for commercial or cinematic VFX reels.',
  'composition/marvel-10': 'This sequence is a stylized Marvel-style intro or title animation.  Features motion graphics, logo transitions, and synchronized sound design.  Camera movements and visual effects create cinematic impact.  Color grading and flares reflect high-production visual language.  Timings are sharp and reflect trailer-style storytelling.  Demonstrates understanding of motion design and branding elements.  Great for showcasing compositing, editing, and design in trailer work.',
  'composition/electro-blast': 'This FX shot showcases an energetic electrical blast effect with dynamic motion.  The arc-like animation interacts well with the environment and the subject.  Glow, flicker, and light spill are used effectively for realism and impact.  Particle sparks and distortion effects add depth and intensity.  Color grading supports the sci-fi/electric theme with high contrast blues and whites.  Sound sync (if included) enhances the blast’s power visually.  An impressive display of energy-based FX design and compositing.',
  'composition/apple-disintegrate-effect': 'This FX shot features a visually dynamic disintegration of an apple using particles. The transition from solidobject to dispersed fragments is fluid and detailed. Particle behavior follows realistic motion and timing, with nice decay and turbulence. Lighting on the particles matches the environment well. Color, shading, and motion blur are handled effectively for a polished finish. The effect is cleanly integrated into the scene, maintaining spatial coherence. An excellent showcase of procedural FX work and object-based simulation.',
  'composition/snow': 'This shot presents a winter scene enhanced with falling snow FX.  The snow particles vary in depth and speed, creating a 3D atmosphere.  Blending with lighting and environment gives it a natural look.  Foreground and background snow elements are layered effectively.  Motion blur and depth of field are applied well.  Great for showcasing environmental FX and seasonal mood.  Ideal for VFX breakdowns involving particle simulation.',
  'composition/aurora': 'This shot displays a beautiful aurora borealis effect integrated into a night scene.  The lights ripple naturally across the sky with soft gradients and motion.  Color shifts are subtle, creating a magical visual experience.  Foreground elements remain visible, preserving depth.  Compositing blends the aurora with atmospheric glow and soft blur.  A strong example of celestial FX and compositing finesse.  Perfect for fantasy or nature-inspired VFX sequences.',
  'composition/christmas': 'This is a cozy  3D-rendered Christmas scene with a decorated tree and glowing fireplace.  Lighting and shadows are thoughtfully balanced between warm and cool sources.  The scene includes gifts, furniture, and textures that create a holiday atmosphere.  Glows and reflections on surfaces enhance realism and mood.  Composition guides the eye toward the tree and the fire, the two focal points.  A strong piece demonstrating environment lighting, rendering, and storytelling.  Ideal for festive scene design or mood-setting portfolio work.',
  'composition/car-cgi': 'A realistic CGI car is composed into a real-world forest road environment.  Lighting direction and shadows match the natural light of the plate.  Reflections and color grading help blend the car convincingly with the background.  The perspective and scale of the car align well with the road curvature.  Minor ambient occlusion and tire-ground contact add realism.  Demonstrates skills in CG lighting, rendering, and integration with photographic plates.  An ideal portfolio piece for CG/environment blending practice.',
  'composition/smart-vector': 'This video demonstrates smart vector-based tracking or warping techniques.  Used likely for beauty cleanup, texture fix, or patching on a deforming surface.  Vector motion maintains stability despite organic surface changes.  The cleanup is seamless and non-destructive across frames.  Showcases advanced cleanup workflows with minimal visible artifacts.  A subtle but powerful example of technical compositing work.  Valuable for portfolios aimed at high-end roto/cleanup roles.',
  'composition/shazam': 'This shot features a magical lightning transformation inspired by the Shazam universe.  The lightning bolt FX is well-timed and layered with light wrap and environment flash.  Energy surges, glow buildup, and character sync are handled effectively.  Sound and visual alignment deliver a superhero-style impact.  The scene includes color grading and timing consistent with action/fantasy themes.  Combines character interaction with composited FX in a cohesive way.  Strong examples of power-up/transformation effects in stylized VFX.',
  'composition/dr-strange': 'This shot recreates a Doctor Strange-style portal or magical effect.  Mandala-style particle rings in circular motion with a mystical glow.  Color, timing, and complexity mirror the look of MCU magical FX.  The portal integrates into the environment with proper light and shadow spill.  Fine particle details and motion blur enhance the realism of conjuring.  Character timing and hand movement are in sync with FX animation.  A visually rich display of magical VFX and compositing finesse.',
  'composition/camera-ghost': 'This shot features ghosting or distortion effects, possibly in a surveillance-style setup.  Distortion and flicker effects give a stylized or narrative-driven look.  The FX blends well with underlying footage without overpowering it.  Lens artifacts or glitches are subtly integrated for storytelling.  It adds a cinematic edge to an otherwise neutral shot.  Useful for sci-fi, horror, or thriller-style compositing.  A good example of atmospheric VFX and digital distortion work.',
  'composition/ben-10': 'This clip appears to recreate or reference a transformation inspired by the Ben 10 series.  The effect includes a sci-fi transformation glow and times visual elements.  The animation syncs well with character motion and scene lighting.  Particles, lens flares, and green glow enhance the Omnitrix-style visuals.  The style stays true to the original while adding a cinematic VFX polish.  A strong creative VFX piece combining fan art with technical execution.  Great for showcasing transformation FX, timing, and franchise-themed work.',
  'composition/watch-ads': 'This is a product commercial showcasing a watch with a focus on luxury and aesthetics.  Reflections, lighting, and focus pulls emphasize product details.  Transitions and speed ramps are used to maintain the viewer\'s attention.  The compositing is clean, with CG/environment possibly enhanced.  Typography and branding are smoothly integrated.  The video reflects a strong grasp of commercial visual language.  A portfolio-ready piece for advertising and product VFX roles.',
  
  // FX projects
  'fx/force-field': 'This shot features a character or object protected by a dynamic force field effect.  The shield appears as a glowing dome or bubble with energy flow details.  Refractions, ripples, or shockwave patterns enhance realism.  FX is reactive to impacts or surrounding motion if applicable.  Compositing blends the field naturally with lighting and reflections.  Represents strong sci-fi VFX and protective energy design.  Ideal for showcasing defense effects in a futuristic setting. ',
  'fx/mewtwo-shadow-ball': 'This VFX clip recreates a classic “Shadow Ball” move inspired by Mewtwo from Pokémon.  Dark energy FX swirls with purple and black hues, glowing with power buildup.  Particles and aura rings surround the core energy sphere.  The animation is timed with anticipation, release, and trail effects.  Lighting and glow match the magical energy theme effectively.  A fan-based effect with polished execution and stylized fantasy motion.  Great for demonstrating FX animation and creative IP interpretation. ',
  'fx/snow': 'This is a breakdown of a snow FX shot, showing different stages of the process.  It likely includes steps such as particle simulation, shading, lighting, and final comp.  Snowflakes are varied in size, fall naturally, and interact with scene lighting.  The breakdown format is great for showing technical understanding.  Each stage transitions cleanly, helping explain the visual progression.  Ideal for both showreels and interview discussions.  A great demonstration of snow simulation and shot development.',
  'fx/fire-pose': 'This shot features a character striking a pose enhanced with fire-based visual FX.  Flames erupt around or from the character in a stylized fashion.  Fire trails, bursts, or embers complement the action and stance.  Compositions include light wrap and realistic flame glow.  Color grading amplifies the heat and intensity of the pose.  A powerful piece showing motion-timed FX and stylized power display.  Well-suited for action sequences or superpower visualizations.',
  'fx/fire-kick': 'This action shot features a fire-enhanced martial arts kick or combat moves.  Flames trail from the motion with timing that accentuates the power.  Fire FX are layered with motion blur, glow, and embers.  The character’s interaction with the flame is clean and well-timed.  Color tones emphasize heat and energy without overpowering the subject.  A great piece for showing stylized combat FX and fire simulation.  Ideal for action reels or cinematic fight sequence FX. ',
  'fx/tornado': 'This shot features a powerful tornado simulation rendered with detailed fluid dynamics.  Swirling motion, dust, and debris are layered to create depth and chaos.  The funnel structure is clearly defined, with turbulence and shape breakup.  Lighting and shadows respond well to volume and movement.  Environmental interaction adds realism, including ground scatter or fog.  Camera framing emphasizes scale and intensity.  An excellent example of large-scale environmental FX and procedural simulation.',
  'fx/flare-gun': 'This shot features the firing of a flare gun with dynamic lighting and projectile FX.  The flare emits bright light, with smoke trails and flicker.  Lens glow and illumination interact with the surrounding environment.  The projectile arc is smooth, and flame dynamics are well rendered.  Compositing blends practical and digital elements effectively.  A strong demonstration of projectile FX and lighting realism.  Useful for military, survival, or action-scene VFX work. ',
  'fx/growth-fx': 'This video demonstrates a growth effect—likely vines, tendrils, or energy spreading.  Organic animation or procedural generation expands smoothly across surfaces.  FX integrates well with the object or environment it interacts with.  Timing conveys life, flow, and natural progression.  Shading and lighting adapt dynamically as the effect evolves.  Ideal for magical, sci-fi, or nature-based sequences.  Showcase procedural animation and evolving surface FX. ',
  'fx/godzilla-fx': 'This clip likely features a massive creature, possibly Godzilla, with environmental FX.  Dust, debris, camera shake, and scale indicators convey weight and impact.  Lighting and shadowing sync well with destruction or movement.  Elements like atomic breath, ground breakage, or smoke may be integrated.  The FX supports a cinematic monster-movie style.  Demonstrates large-scale FX design and environmental compositing.  Ideal for blockbuster-style creature FX sequences. ',
  'fx/vellum-hair': 'This shot showcases dynamic hair simulation using vellum or soft body physics.  Hair strands move naturally with believable secondary motion and bounce.  Collisions are handled smoothly against the character’s head and body.  The simulation respects wind, gravity, and subtle environmental forces.  Rendering includes proper shading and light response on hair fibers.  It highlights technical skills in character grooming and FX motion.  Perfect for character FX (CFX) and grooming-based portfolio work. ',
  'fx/spawn-fx': 'This FX shot captures a character or entity “spawning” into a scene with visual energy.  Glowing particles, smoke, or light beams converge to form the subject.  Rising energy, swirling patterns, and revealing timing are tightly choreographed.  The transition is seamless, with clear buildup and payoff.  Color palette and glow effects support the supernatural or tech theme.  A dramatic and cinematic example of materialization FX.  Perfect for reels showcasing transformation or magical summoning.',
  'fx/cloud-img': 'This render features a volumetric cloud created using 3D simulation or procedural noise.  The soft shape, lighting, and density reflect realistic atmospheric behavior.  Shadows and light scattering within the volume enhance depth and realism.  Edge breakup and subtle noise patterns add natural variation.  Background gradient sky color supports a clean presentation.  Useful for showcasing environment FX or weather-related simulations.  An excellent representation of volumetric rendering and shading.  ',
  'fx/portal': 'This visual shows a portal or dimensional gate opening with energy FX.  Swirling vortex motion, light flares, and particle rings are featured.  Color grading and transparency create a sense of depth and motion.  Rim lighting or glow interacts with the environment.  Animation timing builds anticipation and completes with a smooth loop or fade.  Useful for sci-fi, fantasy, or teleportation scenes.  Strong examples of layered compositing and magical effect simulation.',
  'fx/river-sim': 'This is a fluid simulation of a river or stream rendered with natural realism.  Flow speed, turbulence, and foam match believable water behavior.  Shoreline interaction, depth variation, and ripple detail are well crafted.  Shading includes light reflections, surface breakup, and motion blur.  The camera angle likely supports scale and fluid direction.  Excellent demonstration of water simulation and environment FX.  Perfect for nature scenes, CG landscapes, or realistic simulations. ',
  'fx/dust-shockwave': 'This shot features a radial dust shockwave expanding from a central point.  Particle movement and velocity reflect real-world blast behavior.  Dust layers fade naturally and interact with ground shadows and light.  The effect conveys impact force and atmospheric disturbance effectively.  Timing and expansion speed are handled with precision.  Great for explosions, magical blasts, or impact scenes.  Demonstrates volumetric FX and layered simulation control.',
  'fx/wall-breaking': 'This simulation showcases a realistic wall destruction effect.  Debris fragments vary in size and react naturally to impact forces.  Dust trails and secondary debris enhance the sense of weight and realism.  Fracture timing and propagation are well-executed and believable.  Camera placement supports dynamic viewing of the break.  Perfect for action sequences, demolition shots, or FX breakdowns.  A solid display of rigid body dynamics and destruction simulation. ',
  'fx/dancing-girl': 'This shot features a character or footage of a dancing girl enhanced with VFX elements.  The motion is fluid, with possible FX additions like trails, particles, or glows.  Tracking and roto are clean if compositing is involved.  The dance integrates smoothly with the background and any VFX.  Visual timing complements the rhythm and flow of the performance.  Ideal for stylized VFX, music video work, or motion tracking demo.  A lively shot that demonstrates character integration and VFX embellishment.',
  
  // Show Reels
  'show-reels/composition-reel': 'This reel showcases a strong foundation in VFX compositing, featuring seamless integration of CG elements with live-action footage. It highlights skills in rotoscoping, keying, cleanup, tracking, and color matching.\nEach shot is thoughtfully matched to its reference, demonstrating a good sense of realism and consistency.\nDefocus and depth layering are used effectively to enhance visual depth and immersion.\nThe transitions between shots are smooth, maintaining a professional and engaging flow.\nAttention to detail is visible in edge refinement and motion blur handling.\nOverall, the reel reflects a capable junior compositor ready for production work.',
  'show-reels/fx-reel': 'This FX reel displays a solid grasp of dynamic simulations including fire, smoke, particles, and destruction. The shots feature well-executed physics-based effects that interact convincingly with the environment. Timing and scale of explosions and fluid dynamics show a good understanding of real-world behavior. Color grading and compositing enhance the believability of the effects within live-action scenes. Variety across the reel—from subtle atmospheric FX to high-impact action shots—demonstrates versatility. The reel flows smoothly, with clean transitions and an organized presentation of work. Overall, it reflects strong technical skills and creative control suited for junior to mid-level FX roles.',
  'show-reels/screen-replacement': 'This shot showcases precise screen replacement with accurate motion tracking and perspective alignment. The screen content is integrated seamlessly, matching lighting, reflections, and slight screen warps. Rotoscoping is clean, especially around moving elements interacting with the screen. Defocus and grain matches are well handled, maintaining visual consistency with the original footage. Edges are carefully treated to avoid halos or mismatches, ensuring realism. Color correction blends the inserted content naturally with the surrounding scene. Overall, this shot demonstrates strong technical execution and attention to detail in screen replacement work.',

  //Motion Graphics
  'motion-graphics/cube-animation': 'This cinematic animation shot features a slow-paced, emotionally driven sequence. Animated camera work and subtle FX add depth and storytelling emphasis. Visual tone and color treatment enhance the scene’s narrative intention. Lighting and compositing reflect a moody, dramatic environment. Suitable for film-style visual storytelling and animation-reliant shots. Demonstrates pacing, tone control, and artistic composition. A compelling showcase of animated shot design for narrative reels. ',
  'motion-graphics/evil-dead': 'This horror-themed shot draws inspiration from Evil Dead’s supernatural aesthetic. FX like camera flicker, shadow manipulation, and creepy overlays set the tone. Color grading leans into desaturated greens, reds, and eerie palettes. Sound sync and pacing enhance suspense and shock value. Practical and digital elements blend seamlessly for horror realism. An excellent piece to showcase dark genre VFX and storytelling. Strong addition to horror/fantasy visual reels. ',
  'motion-graphics/dance-effect': 'This vibrant dance clip features stylized glowing trails synced to motion. Each movement emits animated light trails, adding rhythm-based emphasis. Glows are well composited, maintaining natural light falloff and interaction. Roto and tracking work ensure seamless effect application. Color palette is energetic, leaning into neon or futuristic aesthetics. Perfect for music, performance, or experimental VFX portfolios. A striking example of creative FX for entertainment content.',
  'motion-graphics/kgf': 'A stylized VFX shot inspired by the KGF film series, rich in cinematic flair. Grading features bold contrast with gritty gold and black tones. Dust, embers, or slow-motion effects intensify the atmosphere. Character action or buildup is dramatized with epic pacing. A clear homage to South Indian blockbuster style and visual language. Great for showcasing fan-based FX, action timing, and mood setting. Ideal for reels with dramatic visuals and film-inspired VFX.',
  'motion-graphics/music': 'This music video clip combines expressive performance with synchronized visual effects. VFX elements like particles, flares, or color overlays enhance the musical rhythm. Scene transitions and camera cuts follow the beat for a cohesive visual flow. Color grading is applied to create a vibrant, energetic atmosphere. Audio and video are closely aligned, showcasing rhythm-matched editing. An engaging piece for music-driven visuals and performance integration. Ideal for portfolio work in music videos, stylized content, or dance VFX.',
};

const DetailPage = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category, slug]);
  
  // Create the key for map lookups
  const videoKey = `${category}/${slug}`;
  const fileId = videoMap[videoKey];
  const description = descriptionMap[videoKey];

  return (
    <div className="container mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <p className="text-sm text-primary">{toTitleCase(category || '')}</p>
          <CardTitle className="text-3xl font-bold">{toTitleCase(slug || '')}</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8">
          <div className="bg-brand-gray rounded-lg flex items-center justify-center aspect-video">
            {fileId ? (
              <iframe
                src={`https://drive.google.com/file/d/${fileId}/preview`}
                className="w-full h-full rounded-lg"
                allow="autoplay"
                title={`${toTitleCase(slug || '')} Video`}
              />
            ) : (
              <div className="text-center text-muted-foreground p-8">
                <p>Video not available.</p>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Description</h3>
            <p className="text-muted-foreground">
              {description || `This music video clip combines expressive performance with synchronized visual effects. VFX elements like particles, flares, or color overlays enhance the musical rhythm. Scene transitions and camera cuts follow the beat for a cohesive visual flow. Color grading is applied to create a vibrant, energetic atmosphere. Audio and video are closely aligned, showcasing rhythm-matched editing. An engaging piece for music-driven visuals and performance integration. Ideal for portfolio work in music videos, stylized content, or dance VFX..`}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailPage;