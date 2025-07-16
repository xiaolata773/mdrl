/**
 * 文件数据 - 每个主分类下都有多个文件
 * 4和5分类有子分类(4.1,4.2,4.3和5.1,5.2,5.3)
 */
const fileData = [
    // 0 - 资格预审文件 (5个文件)
    { id: '0-001', name: 'Cover Letter', type: '0', subType: '' },
    { id: '0-002', name: 'Sales Record', type: '0', subType: '' },
    { id: '0-003', name: 'Audited Financial Statement', type: '0', subType: '' },
    { id: '0-004', name: 'Quotation/Offer', type: '0', subType: '' },
    
    // 1 - 项目管理文件 (5个文件)
    { id: '1-001', name: 'Supplier/Master Document Register List (SDRL/VDRL/MDR)', type: '1', subType: '' },
    { id: '1-002', name: 'Project Baseline Schedule', type: '1', subType: '' },
    { id: '1-003', name: 'Project Organization Chart ', type: '1', subType: '' },
    { id: '1-004', name: 'Communication Matrix', type: '1', subType: '' },
    { id: '1-005', name: 'List of Subcontractors/ List of Sub-suppliers', type: '1', subType: '' },
    
    // 2 - 质量文件 (5个文件)
    { id: '2-001', name: 'Project Quality Plan', type: '2', subType: '' },
    { id: '2-002', name: 'Quality Management System (ISO 9000/9001/45001/14001 / SCL)', type: '2', subType: '' },
    { id: '2-003', name: 'Quality Control Plan', type: '2', subType: '' },
    { id: '2-004', name: 'Quality Audit Procedure', type: '2', subType: '' },
    { id: '2-005', name: 'Quality Audit Plan', type: '2', subType: '' },
    
    // 3 - SHE文件 (5个文件)
    { id: '3-001', name: 'SHE Plan', type: '3', subType: '' },
    { id: '3-002', name: 'Environmental Management Plan', type: '3', subType: '' },
    { id: '3-003', name: 'Waste Management Plan', type: '3', subType: '' },
    { id: '3-004', name: 'Emergency Response Plan', type: '3', subType: '' },
    { id: '3-005', name: 'Project Risk Assessment Plan', type: '3', subType: '' },
    
    // 4 - 缆技术文件 (6个文件 - 3个子分类)
    { id: '4-001', name: 'Cable Technical Specification (Cable Design report)', type: '4', subType: '4.1' },
    { id: '4-002', name: 'Cable Data Sheet', type: '4', subType: '4.1' },
    { id: '4-003', name: 'Cable Inspection Test Plan', type: '4', subType: '4.2' },
    { id: '4-004', name: 'Material Receiving Procedure', type: '4', subType: '4.2' },
    { id: '4-005', name: 'Historical Type Test Reports', type: '4', subType: '4.3' },
    { id: '4-006', name: 'Positive Material Identification (PMI) Report', type: '4', subType: '4.3' },
    
    // 5 - 缆附件 (6个文件 - 3个子分类)
    { id: '5-001', name: 'J-Tube Centralizer/Seal GA & LOM', type: '5', subType: '5.1' },
    { id: '5-002', name: 'Bend Restrictor/Stiffener GA & LOM', type: '5', subType: '5.1' },
    { id: '5-003', name: 'Inspection Test Plan for Accessories', type: '5', subType: '5.2' },
    { id: '5-004', name: 'J-Tube Centralizer/Seal Assembly Procedure', type: '5', subType: '5.2' },
    { id: '5-005', name: 'FAT Report for Accessories', type: '5', subType: '5.3' },
    
    // 6 - 运输文件 (5个文件)
    { id: '6-001', name: 'Cable Tank/reel GA Drawing', type: '6', subType: '' },
    { id: '6-002', name: 'Cable Tank/reel Design Report', type: '6', subType: '' },
    { id: '6-003', name: 'Equipment Packing Specification', type: '6', subType: '' },
    { id: '6-004', name: 'Storage, Preservation and Shipping Specification', type: '6', subType: '' },
    { id: '6-005', name: 'Special Tools List', type: '6', subType: '' },
    
    // 7 - 现场服务文件 (5个文件)
    { id: '7-001', name: 'Handling and Installation Guidelines', type: '7', subType: '' },
    { id: '7-002', name: 'Operation and Maintenance Manual', type: '7', subType: '' },
    { id: '7-003', name: 'Post installation/post hook up test guidelines', type: '7', subType: '' },
    { id: '7-004', name: 'Installation and monitoring test guidelines', type: '7', subType: '' },
    { id: '7-005', name: 'Testing report during lay and post installation(if any)', type: '7', subType: '' },
    
    // 8 - As Built文件 (5个文件)
    { id: '8-001', name: 'Manufacturing Record Book Index', type: '8', subType: '' },
    { id: '8-002', name: 'Manufacturing  Record Book', type: '8', subType: '' },
    { id: '8-003', name: 'Material Traceability and Manufacturing Records', type: '8', subType: '' },
    
    // 9 - 其他文件 (5个文件)
    { id: '9-001', name: 'Other Document', type: '9', subType: '' },
];

/**
 * 子分类映射
 */
const subCategories = {
    '4': [
        { value: '4.1', label: 'Cable Design' },
        { value: '4.2', label: 'Cable Test Plans & Procedures' },
        { value: '4.3', label: 'Cable Test Reports' }
    ],
    '5': [
        { value: '5.1', label: 'Accessories Design' },
        { value: '5.2', label: 'Accessories Test Plans & Procedures' },
        { value: '5.3', label: 'Accessories Test Reports' }
    ]
};

/**
 * 类型名称映射
 */
const typeNames = {
    '0': '0 - Pre-qualification & Commercial',
    '1': '1 - General Project Management',
    '2': '2 - Quality Management',
    '3': '3 - SHE Management',
    '4': '4 - Cable Engineering',
    '5': '5 - Accessories Engineering',
    '6': '6 - Storage, Loading & Transportation',
    '7': '7 - Site Service including Handling & Maintenance ',
    '8': '8 - As Built Document',
    '9': '9 - Any other Documents'
};

/**
 * 文件管理核心类
 */
class FileManager {
    constructor() {
        this.fileTimes = {};
        this.selectedFiles = [];
        this.initElements();
        this.initializeFileTimes();
        this.setupEventListeners();
        this.createCategoryDropdowns();
    }

    initElements() {
        this.globalPoDateInput = document.getElementById('globalPoDate');
        this.globalCustomerDaysInput = document.getElementById('globalCustomerDays');
        this.applyGlobalTimeBtn = document.getElementById('applyGlobalTime');
        this.categorySection = document.getElementById('categorySection');
        this.exportBtn = document.getElementById('exportBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.statusEl = document.getElementById('status');
    }

    initializeFileTimes() {
        fileData.forEach(file => {
            this.fileTimes[file.id] = {
                poDate: '2025-07-16', // 默认PO日期设置为2025-07-16
                customerDate: '2025-07-30' // 默认提交日期设置为PO日期+14天
            };
        });
    }

    setupEventListeners() {
        this.applyGlobalTimeBtn.addEventListener('click', () => this.applyGlobalTime());
        this.exportBtn.addEventListener('click', () => this.exportToExcel());
        this.resetBtn.addEventListener('click', () => this.resetSelection());
    }

    /**
     * 将日期格式化为 DD-Month-YYYY (如 16-July-2025)
     * @param {string} dateStr - 日期字符串 (YYYY-MM-DD)
     * @returns {string} 格式化后的日期
     */
    formatDateEnglish(dateStr) {
        if (!dateStr) return '';
        
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        
        const date = new Date(dateStr);
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        
        return `${day}-${month}-${year}`;
    }

    /**
     * 创建分类下拉框
     */
    createCategoryDropdowns() {
        this.categorySection.innerHTML = '';
        
        Object.entries(typeNames).forEach(([type, name]) => {
            const category = document.createElement('div');
            category.className = 'category';
            
            const header = document.createElement('div');
            header.className = 'category-header';
            
            const title = document.createElement('span');
            title.textContent = name;
            
            const actions = document.createElement('div');
            actions.className = 'category-actions';
            
            const selectAllBtn = document.createElement('button');
            selectAllBtn.className = 'select-all-btn';
            selectAllBtn.textContent = 'Select All';
            selectAllBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleSelectAll(type);
            });
            
            actions.appendChild(selectAllBtn);
            header.appendChild(title);
            header.appendChild(actions);
            
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                content.style.display = content.style.display === 'none' ? 'block' : 'none';
            });
            
            const content = document.createElement('div');
            content.className = 'category-content';
            content.style.display = 'none';
            
            const categoryFiles = fileData.filter(file => file.type === type);
            
            if (subCategories[type]) {
                this.createSubcategories(type, content);
            } else {
                this.createFileItems(categoryFiles, content);
            }
            
            category.appendChild(header);
            category.appendChild(content);
            this.categorySection.appendChild(category);
        });
    }

    createSubcategories(type, parentContent) {
        const categoryFiles = fileData.filter(file => file.type === type);
        
        subCategories[type].forEach(subCat => {
            const subContainer = document.createElement('div');
            subContainer.className = 'subcategory-container';
            
            const subHeader = document.createElement('div');
            subHeader.className = 'subcategory-header';
            
            const subTitle = document.createElement('span');
            subTitle.textContent = subCat.label;
            
            const subSelectAllBtn = document.createElement('button');
            subSelectAllBtn.className = 'subcategory-select-all';
            subSelectAllBtn.textContent = 'Select All';
            subSelectAllBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleSelectSubcategory(type, subCat.value);
            });
            
            subHeader.appendChild(subTitle);
            subHeader.appendChild(subSelectAllBtn);
            
            subHeader.addEventListener('click', () => {
                const subContent = subHeader.nextElementSibling;
                subContent.style.display = subContent.style.display === 'none' ? 'block' : 'none';
            });
            
            const subContent = document.createElement('div');
            subContent.className = 'subcategory-content';
            
            const subFiles = categoryFiles.filter(file => file.subType === subCat.value);
            this.createFileItems(subFiles, subContent);
            
            subContainer.appendChild(subHeader);
            subContainer.appendChild(subContent);
            parentContent.appendChild(subContainer);
        });
        
        const uncategorizedFiles = categoryFiles.filter(file => !file.subType);
        if (uncategorizedFiles.length > 0) {
            const subTitle = document.createElement('div');
            subTitle.className = 'subcategory-title';
            subTitle.textContent = '其他文件';
            parentContent.appendChild(subTitle);
            this.createFileItems(uncategorizedFiles, parentContent);
        }
    }

    /**
     * 创建文件项
     */
    createFileItems(files, container) {
        files.forEach(file => {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'file-checkbox';
            checkbox.id = `check-${file.id}`;
            checkbox.addEventListener('change', () => {
                this.toggleFileSelection(file.id, checkbox.checked);
            });
            
            const fileInfo = document.createElement('div');
            fileInfo.className = 'file-info';
            
            const fileName = document.createElement('div');
            fileName.className = 'file-name';
            fileName.textContent = file.name;
            
            const fileTime = document.createElement('div');
            fileTime.className = 'file-time';
            
            const poTimeGroup = document.createElement('div');
            poTimeGroup.className = 'time-group';
            
            const poLabel = document.createElement('label');
            poLabel.textContent = 'PO Date';
            poLabel.htmlFor = `poDate-${file.id}`;
            
            const poInput = document.createElement('input');
            poInput.type = 'date';
            poInput.id = `poDate-${file.id}`;
            poInput.value = this.fileTimes[file.id].poDate;
            poInput.addEventListener('change', (e) => {
                this.updateFileTime(file.id, 'poDate', e.target.value);
            });
            
            poTimeGroup.appendChild(poLabel);
            poTimeGroup.appendChild(poInput);
            
            const customerTimeGroup = document.createElement('div');
            customerTimeGroup.className = 'time-group';
            
            const customerLabel = document.createElement('label');
            customerLabel.textContent = 'Planned Submission';
            customerLabel.htmlFor = `customerDate-${file.id}`;
            
            const customerInput = document.createElement('input');
            customerInput.type = 'date';
            customerInput.id = `customerDate-${file.id}`;
            customerInput.value = this.fileTimes[file.id].customerDate;
            customerInput.addEventListener('change', (e) => {
                this.updateFileTime(file.id, 'customerDate', e.target.value);
            });
            
            customerTimeGroup.appendChild(customerLabel);
            customerTimeGroup.appendChild(customerInput);
            
            fileTime.appendChild(poTimeGroup);
            fileTime.appendChild(customerTimeGroup);
            fileInfo.appendChild(fileName);
            fileInfo.appendChild(fileTime);
            fileItem.appendChild(checkbox);
            fileItem.appendChild(fileInfo);
            container.appendChild(fileItem);
        });
    }

    /**
     * 应用全局时间设置
     */
    applyGlobalTime() {
        const poDate = this.globalPoDateInput.value;
        const customerDays = parseInt(this.globalCustomerDaysInput.value) || 0;
        const customerDate = this.addDays(poDate, customerDays);
        
        Object.keys(this.fileTimes).forEach(fileId => {
            this.fileTimes[fileId] = { poDate, customerDate };
        });
        
        this.updateAllFileTimeInputs();
        this.updateStatus(`已将所有文件时间设置为: PO Date ${this.formatDateEnglish(poDate)}, Planned Submission Date ${this.formatDateEnglish(customerDate)}`, 'success');
    }

    addDays(dateStr, days) {
        const date = new Date(dateStr);
        date.setDate(date.getDate() + days);
        return date.toISOString().split('T')[0];
    }

    updateFileTime(fileId, timeType, value) {
        this.fileTimes[fileId][timeType] = value;
    }

    updateAllFileTimeInputs() {
        Object.entries(this.fileTimes).forEach(([fileId, times]) => {
            const poInput = document.getElementById(`poDate-${fileId}`);
            const customerInput = document.getElementById(`customerDate-${fileId}`);
            if (poInput) poInput.value = times.poDate;
            if (customerInput) customerInput.value = times.customerDate;
        });
    }

    toggleSelectAll(type) {
        const categoryFiles = fileData.filter(file => file.type === type).map(file => file.id);
        const allSelected = categoryFiles.every(fileId => this.selectedFiles.includes(fileId));
        this.toggleSelection(categoryFiles, !allSelected);
        this.updateStatus(allSelected ? 
            `All selections have been canceled. ${typeNames[type]}` : 
            `Select All ${typeNames[type]}`);
    }

    toggleSelectSubcategory(type, subType) {
        const subCategoryFiles = fileData.filter(file => file.type === type && file.subType === subType)
                                     .map(file => file.id);
        const allSelected = subCategoryFiles.every(fileId => this.selectedFiles.includes(fileId));
        this.toggleSelection(subCategoryFiles, !allSelected);
        this.updateStatus(allSelected ? `已取消全选 ${subType}` : `已全选 ${subType}`);
    }

    toggleSelection(fileIds, shouldSelect) {
        fileIds.forEach(fileId => {
            const checkbox = document.getElementById(`check-${fileId}`);
            if (checkbox) {
                checkbox.checked = shouldSelect;
                this.toggleFileSelection(fileId, shouldSelect);
            }
        });
    }

    toggleFileSelection(fileId, isSelected) {
        if (isSelected && !this.selectedFiles.includes(fileId)) {
            this.selectedFiles.push(fileId);
        } else if (!isSelected && this.selectedFiles.includes(fileId)) {
            this.selectedFiles = this.selectedFiles.filter(id => id !== fileId);
        }
        this.updateStatus();
    }

    resetSelection() {
        this.selectedFiles = [];
        document.querySelectorAll('.file-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });
        this.updateStatus('选择已重置');
    }

    exportToExcel() {
        if (this.selectedFiles.length === 0) {
            this.updateStatus('请先选择要导出的文件', 'error');
            return;
        }
        
        try {
            const excelData = [
                ['Document Title', 'PO Date', 'Planned Submission Date'],
                ...this.selectedFiles.map(fileId => {
                    const file = fileData.find(f => f.id === fileId);
                    const times = this.fileTimes[fileId];
                    return [
                        file.name, 
                        this.formatDateEnglish(times.poDate),  // 使用英文格式日期
                        this.formatDateEnglish(times.customerDate)  // 使用英文格式日期
                    ];
                })
            ];
            
            const wb = XLSX.utils.book_new();
            const ws = XLSX.utils.aoa_to_sheet(excelData);
            ws['!cols'] = [{ width: 30 }, { width: 15 }, { width: 15 }];
            XLSX.utils.book_append_sheet(wb, ws, "文件时间表");
            
            const dateStr = this.formatDateEnglish(new Date().toISOString().slice(0, 10));
            const fileName = `文件时间表_${dateStr}.xlsx`;
            XLSX.writeFile(wb, fileName);
            
            this.updateStatus(`成功导出 ${this.selectedFiles.length} 个文件到 ${fileName}`, 'success');
        } catch (error) {
            console.error('导出错误:', error);
            this.updateStatus(`导出失败: ${error.message}`, 'error');
        }
    }

    updateStatus(message = '', type = '') {
        this.statusEl.textContent = message || `已选择 ${this.selectedFiles.length} 个文件`;
        this.statusEl.className = `status ${type}`;
    }
}
