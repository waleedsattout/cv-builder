import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CVData, PersonalInfo, Experience, Education, Language } from '../cv.model';

@Component({
  selector: 'app-cv-builder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cv-builder.component.html',
  styleUrl: './cv-builder.component.css'
})
export class CvBuilderComponent implements OnInit {
  cvData: CVData = {
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      github: ''
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
    languages: [],
    interests: []
  };

  newSkill: string = '';

  constructor() {}

  ngOnInit(): void {
    // Initialize form drag and drop
    this.initFormDragAndDrop();
  }

  formatDate(dateString: string): string {
    if (!dateString) return '';
    // Convert date string from DD-MM-YYYY to MM/YYYY or similar format
    const parts = dateString.split('-');
    if (parts.length === 3) {
      return `${parts[1]}/${parts[2]}`; // MM/YYYY
    }
    return dateString;
  }

  createEmptyExperience(): Experience {
    return {
      id: Date.now(),
      jobTitle: '',
      company: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
      achievements: []
    };
  }

  createEmptyEducation(): Education {
    return {
      id: Date.now(),
      degree: '',
      school: '',
      graduationDate: '',
      location: '',
      description: ''
    };
  }

  addExperience(): void {
    this.cvData.experience.push(this.createEmptyExperience());
  }

  removeExperience(index: number): void {
    if (this.cvData.experience.length > 1) {
      this.cvData.experience.splice(index, 1);
    }
  }

  addEducation(): void {
    this.cvData.education.push(this.createEmptyEducation());
  }

  removeEducation(index: number): void {
    if (this.cvData.education.length > 1) {
      this.cvData.education.splice(index, 1);
    }
  }

  addSkill(): void {
    this.cvData.skills.push('');
  }

  removeSkill(index: number): void {
    if (this.cvData.skills.length > 1) {
      this.cvData.skills.splice(index, 1);
    }
  }

  generateCV(): void {
    // Show the CV preview
    const cvTemplate = document.querySelector('.cv-template') as HTMLDivElement;
    const placeholder = document.querySelector('.placeholder-message') as HTMLDivElement;
    const btnPrint = document.getElementById('print-btn') as HTMLButtonElement;
    
    if (cvTemplate) {
      cvTemplate.style.display = 'block';
    }
    
    if (placeholder) {
      placeholder.style.display = 'none';
    }
    
    if (btnPrint) {
      btnPrint.style.display = 'block';
    }
  }

  // Preview drag and drop functionality
  onPreviewDragStart(event: DragEvent, sectionId: string): void {
    const target = event.target as HTMLElement;
    target.classList.add('dragging');
    event.dataTransfer?.setData('text/plain', sectionId);
  }

  onPreviewDragEnd(event: DragEvent): void {
    const target = event.target as HTMLElement;
    target.classList.remove('dragging');
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    const target = event.target as HTMLElement;
    if (target && target.classList.contains('drop-zone')) {
      target.classList.add('drag-over');
    }
  }

  onDragLeave(event: DragEvent): void {
    const target = event.target as HTMLElement;
    if (target && target.classList.contains('drop-zone')) {
      target.classList.remove('drag-over');
    }
  }

  onPreviewDrop(event: DragEvent, dropZone: 'sidebar' | 'main'): void {
    event.preventDefault();
    const target = event.target as HTMLElement;
    if (target && target.classList.contains('drop-zone')) {
      target.classList.remove('drag-over');
    }

    const sectionId = event.dataTransfer?.getData('text/plain');
    if (!sectionId) return;

    // Get the dragged element
    const draggedSection = document.getElementById(`preview-${sectionId}`);
    if (!draggedSection) return;

    // Determine target container
    const targetContainer = dropZone === 'sidebar' 
      ? document.getElementById('sidebar-drop-zone') 
      : document.getElementById('main-content-drop-zone');
    if (!targetContainer) return;

    // Add the section to the new container (after profile header if sidebar)
    if (dropZone === 'sidebar') {
      const profileHeader = targetContainer.querySelector('.profile-header');
      targetContainer.insertBefore(draggedSection, profileHeader?.nextSibling ?? null);
    } else {
      targetContainer.appendChild(draggedSection);
    }
  }

  // Initialize form drag and drop (similar to original)
  initFormDragAndDrop(): void {
    const formSections = document.querySelectorAll('.dynamic-section');
    formSections.forEach(section => {
      section.addEventListener('dragstart', (e) => {
        const dragEvent = e as unknown as DragEvent;
        const target = dragEvent.target as HTMLElement;
        target.classList.add('dragging');
        dragEvent.dataTransfer?.setData('text/plain', target.id);
      });

      section.addEventListener('dragend', (e) => {
        const dragEvent = e as unknown as DragEvent;
        const target = dragEvent.target as HTMLElement;
        target.classList.remove('dragging');
      });
    });
  }

  printCV(): void {
    window.print();
  }
}
