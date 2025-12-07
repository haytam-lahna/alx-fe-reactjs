# Home Page Documentation

## Component Structure

### HomePage Component
Location: `src/components/HomePage.jsx`

## Features

### 1. Data Loading
- Uses `useState` to manage recipe data
- Uses `useEffect` to load data from `data.json` on component mount
- Renders recipes dynamically from the loaded data

### 2. Responsive Grid Layout

**Breakpoint Behavior:**
- **Mobile (< 640px)**: `grid-cols-1` - Single column
- **Small Tablet (≥ 640px)**: `sm:grid-cols-2` - Two columns
- **Desktop (≥ 1024px)**: `lg:grid-cols-3` - Three columns
- **Large Desktop (≥ 1280px)**: `xl:grid-cols-4` - Four columns

### 3. Recipe Card Styling

**Container:**
- White background (`bg-white`)
- Rounded corners (`rounded-lg`)
- Base shadow (`shadow-md`)
- Overflow hidden for image containment

**Hover Effects:**
- Enhanced shadow (`hover:shadow-xl`)
- Scale up slightly (`hover:scale-105`)
- Smooth transitions (`transition-shadow duration-300`)

**Image:**
- Fixed height (`h-48`)
- Full width (`w-full`)
- Cover fit (`object-cover`)

**Title:**
- Extra-large font (`text-xl`)
- Bold weight (`font-bold`)
- Color change on hover (`hover:text-orange-600`)

**Summary:**
- Small text (`text-sm`)
- Gray color (`text-gray-600`)
- Line clamp for overflow (`line-clamp-3`)

**Button:**
- Full width (`w-full`)
- Orange background (`bg-orange-500`)
- Hover effect (`hover:bg-orange-600`)
- Focus ring for accessibility

### 4. Layout Sections

**Header:**
- Fixed at top
- White background with shadow
- Contains title and subtitle

**Main Content:**
- Container with padding
- Section title
- Recipe grid
- Empty state handling

**Footer:**
- Dark background (`bg-gray-800`)
- White text
- Copyright information

## Styling Details

### Color Palette:
- **Primary**: Orange (#f97316)
- **Background**: Orange-red gradient
- **Text**: Gray shades
- **Cards**: White

### Spacing:
- Container padding: `px-4`
- Section spacing: `py-12`
- Card gap: `gap-6`
- Internal card padding: `p-6`

### Typography:
- Main heading: `text-4xl font-bold`
- Section heading: `text-3xl font-bold`
- Card title: `text-xl font-bold`
- Body text: `text-sm` to `text-base`

## Accessibility Features

- Semantic HTML structure
- Alt text for images
- Focus rings on interactive elements
- Proper heading hierarchy
- Adequate color contrast

## Performance Considerations

- Lazy loading capability ready
- Minimal re-renders with proper state management
- CSS transitions hardware-accelerated
- Optimized grid layout

## Future Enhancements

- [ ] Add search functionality
- [ ] Add category filtering
- [ ] Implement recipe detail navigation
- [ ] Add favorite/bookmark feature
- [ ] Add user ratings display
- [ ] Implement infinite scroll or pagination
