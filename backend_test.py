#!/usr/bin/env python3
"""
Comprehensive Backend API Tests for Orion Digital Portfolio
Tests all backend endpoints with various scenarios
"""

import requests
import json
import sys
from datetime import datetime

# Backend URL from frontend/.env
BACKEND_URL = "https://digital-studio-53.preview.emergentagent.com/api"

class APITester:
    def __init__(self, base_url):
        self.base_url = base_url
        self.test_results = []
        self.session = requests.Session()
        # Set timeout for all requests
        self.session.timeout = 30
        
    def log_test(self, test_name, success, details="", response_data=None):
        """Log test results"""
        result = {
            "test": test_name,
            "success": success,
            "details": details,
            "timestamp": datetime.now().isoformat(),
            "response_data": response_data
        }
        self.test_results.append(result)
        
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}")
        if details:
            print(f"   Details: {details}")
        if not success and response_data:
            print(f"   Response: {response_data}")
        print()

    def test_health_check(self):
        """Test health check endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/health")
            
            if response.status_code == 200:
                data = response.json()
                if "status" in data and "timestamp" in data:
                    self.log_test("Health Check", True, f"Status: {data['status']}")
                    return True
                else:
                    self.log_test("Health Check", False, "Missing required fields in response", data)
                    return False
            else:
                self.log_test("Health Check", False, f"HTTP {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("Health Check", False, f"Exception: {str(e)}")
            return False

    def test_get_all_projects(self):
        """Test GET /api/projects without filters"""
        try:
            response = self.session.get(f"{self.base_url}/projects")
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "data" in data and isinstance(data["data"], list):
                    projects = data["data"]
                    if len(projects) == 8:  # Should have 8 seeded projects
                        self.log_test("GET /projects (all)", True, f"Returned {len(projects)} projects")
                        return True
                    else:
                        self.log_test("GET /projects (all)", False, f"Expected 8 projects, got {len(projects)}")
                        return False
                else:
                    self.log_test("GET /projects (all)", False, "Invalid response structure", data)
                    return False
            else:
                self.log_test("GET /projects (all)", False, f"HTTP {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("GET /projects (all)", False, f"Exception: {str(e)}")
            return False

    def test_get_projects_with_filters(self):
        """Test GET /projects with various filters"""
        test_cases = [
            {"category": "sites", "expected_min": 1, "name": "category=sites"},
            {"category": "apps", "expected_min": 1, "name": "category=apps"}, 
            {"category": "landing", "expected_min": 1, "name": "category=landing"},
            {"featured": True, "expected_min": 1, "name": "featured=true"},
            {"featured": False, "expected_min": 1, "name": "featured=false"},
            {"limit": 3, "expected_max": 3, "name": "limit=3"}
        ]
        
        all_passed = True
        
        for case in test_cases:
            try:
                params = {k: v for k, v in case.items() if k not in ["expected_min", "expected_max", "name"]}
                response = self.session.get(f"{self.base_url}/projects", params=params)
                
                if response.status_code == 200:
                    data = response.json()
                    if data.get("success") and "data" in data:
                        projects = data["data"]
                        
                        # Check expected minimum
                        if "expected_min" in case and len(projects) < case["expected_min"]:
                            self.log_test(f"GET /projects ({case['name']})", False, 
                                        f"Expected at least {case['expected_min']}, got {len(projects)}")
                            all_passed = False
                            continue
                            
                        # Check expected maximum  
                        if "expected_max" in case and len(projects) > case["expected_max"]:
                            self.log_test(f"GET /projects ({case['name']})", False,
                                        f"Expected at most {case['expected_max']}, got {len(projects)}")
                            all_passed = False
                            continue
                            
                        # Verify filter logic
                        if "category" in params:
                            for project in projects:
                                if project.get("category") != params["category"]:
                                    self.log_test(f"GET /projects ({case['name']})", False,
                                                f"Project {project.get('id')} has wrong category")
                                    all_passed = False
                                    break
                                    
                        if "featured" in params:
                            for project in projects:
                                if project.get("featured") != params["featured"]:
                                    self.log_test(f"GET /projects ({case['name']})", False,
                                                f"Project {project.get('id')} has wrong featured status")
                                    all_passed = False
                                    break
                        
                        if all_passed:
                            self.log_test(f"GET /projects ({case['name']})", True, f"Returned {len(projects)} projects")
                    else:
                        self.log_test(f"GET /projects ({case['name']})", False, "Invalid response structure", data)
                        all_passed = False
                else:
                    self.log_test(f"GET /projects ({case['name']})", False, f"HTTP {response.status_code}", response.text)
                    all_passed = False
                    
            except Exception as e:
                self.log_test(f"GET /projects ({case['name']})", False, f"Exception: {str(e)}")
                all_passed = False
                
        return all_passed

    def test_get_single_project(self):
        """Test GET /projects/:id"""
        # Test valid IDs (1-8 should exist from seeding)
        valid_ids = ["1", "2", "3", "4", "5", "6", "7", "8"]
        all_passed = True
        
        for project_id in valid_ids:
            try:
                response = self.session.get(f"{self.base_url}/projects/{project_id}")
                
                if response.status_code == 200:
                    data = response.json()
                    if data.get("success") and "data" in data:
                        project = data["data"]
                        if project.get("id") == project_id:
                            self.log_test(f"GET /projects/{project_id}", True, f"Project: {project.get('title')}")
                        else:
                            self.log_test(f"GET /projects/{project_id}", False, f"Wrong project ID returned")
                            all_passed = False
                    else:
                        self.log_test(f"GET /projects/{project_id}", False, "Invalid response structure", data)
                        all_passed = False
                else:
                    self.log_test(f"GET /projects/{project_id}", False, f"HTTP {response.status_code}", response.text)
                    all_passed = False
                    
            except Exception as e:
                self.log_test(f"GET /projects/{project_id}", False, f"Exception: {str(e)}")
                all_passed = False
        
        # Test invalid ID (should return 404)
        try:
            response = self.session.get(f"{self.base_url}/projects/999")
            if response.status_code == 404:
                self.log_test("GET /projects/999 (invalid)", True, "Correctly returned 404")
            else:
                self.log_test("GET /projects/999 (invalid)", False, f"Expected 404, got {response.status_code}")
                all_passed = False
        except Exception as e:
            self.log_test("GET /projects/999 (invalid)", False, f"Exception: {str(e)}")
            all_passed = False
            
        return all_passed

    def test_get_testimonials(self):
        """Test GET /testimonials"""
        try:
            # Test default (approved=true)
            response = self.session.get(f"{self.base_url}/testimonials")
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "data" in data:
                    testimonials = data["data"]
                    if len(testimonials) == 4:  # Should have 4 seeded testimonials
                        # Verify all are approved
                        all_approved = all(t.get("approved", True) for t in testimonials)
                        if all_approved:
                            self.log_test("GET /testimonials (default)", True, f"Returned {len(testimonials)} approved testimonials")
                        else:
                            self.log_test("GET /testimonials (default)", False, "Contains non-approved testimonials")
                            return False
                    else:
                        self.log_test("GET /testimonials (default)", False, f"Expected 4 testimonials, got {len(testimonials)}")
                        return False
                else:
                    self.log_test("GET /testimonials (default)", False, "Invalid response structure", data)
                    return False
            else:
                self.log_test("GET /testimonials (default)", False, f"HTTP {response.status_code}", response.text)
                return False

            # Test with approved=false (should return empty or different set)
            response = self.session.get(f"{self.base_url}/testimonials", params={"approved": False})
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "data" in data:
                    self.log_test("GET /testimonials (approved=false)", True, f"Returned {len(data['data'])} non-approved testimonials")
                    return True
                else:
                    self.log_test("GET /testimonials (approved=false)", False, "Invalid response structure", data)
                    return False
            else:
                self.log_test("GET /testimonials (approved=false)", False, f"HTTP {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("GET /testimonials", False, f"Exception: {str(e)}")
            return False

    def test_contact_form(self):
        """Test POST /contact with various scenarios"""
        
        # Test valid contact form submission
        valid_contact = {
            "name": "João Silva",
            "email": "joao.silva@email.com",
            "phone": "+55 11 99999-9999",
            "service": "Desenvolvimento Web",
            "message": "Gostaria de solicitar um orçamento para desenvolvimento de um site institucional para minha empresa."
        }
        
        try:
            response = self.session.post(f"{self.base_url}/contact", json=valid_contact)
            
            if response.status_code == 201:
                data = response.json()
                if data.get("success") and "data" in data and "id" in data["data"]:
                    self.log_test("POST /contact (valid)", True, "Contact form submitted successfully")
                else:
                    self.log_test("POST /contact (valid)", False, "Invalid response structure", data)
                    return False
            else:
                self.log_test("POST /contact (valid)", False, f"HTTP {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("POST /contact (valid)", False, f"Exception: {str(e)}")
            return False

        # Test validation scenarios
        validation_tests = [
            {
                "name": "missing name",
                "data": {k: v for k, v in valid_contact.items() if k != "name"},
                "should_fail": True
            },
            {
                "name": "invalid email", 
                "data": {**valid_contact, "email": "invalid-email"},
                "should_fail": True
            },
            {
                "name": "message too short",
                "data": {**valid_contact, "message": "Hi"},
                "should_fail": True  
            },
            {
                "name": "missing service",
                "data": {k: v for k, v in valid_contact.items() if k != "service"},
                "should_fail": True
            }
        ]
        
        all_passed = True
        
        for test_case in validation_tests:
            try:
                response = self.session.post(f"{self.base_url}/contact", json=test_case["data"])
                
                if test_case["should_fail"]:
                    if response.status_code >= 400:
                        self.log_test(f"POST /contact ({test_case['name']})", True, f"Correctly rejected with {response.status_code}")
                    else:
                        self.log_test(f"POST /contact ({test_case['name']})", False, f"Should have failed but got {response.status_code}")
                        all_passed = False
                else:
                    if response.status_code == 201:
                        self.log_test(f"POST /contact ({test_case['name']})", True, "Successfully accepted")
                    else:
                        self.log_test(f"POST /contact ({test_case['name']})", False, f"Should have succeeded but got {response.status_code}")
                        all_passed = False
                        
            except Exception as e:
                self.log_test(f"POST /contact ({test_case['name']})", False, f"Exception: {str(e)}")
                all_passed = False
                
        return all_passed

    def test_stats(self):
        """Test GET /stats"""
        try:
            response = self.session.get(f"{self.base_url}/stats")
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "data" in data:
                    stats = data["data"]
                    required_fields = ["projectsCompleted", "clientsSatisfied", "yearsExperience", "successRate"]
                    
                    missing_fields = [field for field in required_fields if field not in stats]
                    
                    if not missing_fields:
                        self.log_test("GET /stats", True, f"All required stats fields present")
                        return True
                    else:
                        self.log_test("GET /stats", False, f"Missing fields: {missing_fields}", stats)
                        return False
                else:
                    self.log_test("GET /stats", False, "Invalid response structure", data)
                    return False
            else:
                self.log_test("GET /stats", False, f"HTTP {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("GET /stats", False, f"Exception: {str(e)}")
            return False

    def run_all_tests(self):
        """Run all API tests"""
        print(f"🚀 Starting Backend API Tests")
        print(f"Backend URL: {self.base_url}")
        print("=" * 60)
        
        tests = [
            self.test_health_check,
            self.test_get_all_projects,
            self.test_get_projects_with_filters,
            self.test_get_single_project,
            self.test_get_testimonials,
            self.test_contact_form,
            self.test_stats
        ]
        
        total_tests = 0
        passed_tests = 0
        
        for test_func in tests:
            result = test_func()
            total_tests += 1
            if result:
                passed_tests += 1
        
        print("=" * 60)
        print(f"📊 Test Summary: {passed_tests}/{total_tests} tests passed")
        
        if passed_tests == total_tests:
            print("✅ All backend API tests PASSED!")
            return True
        else:
            print("❌ Some backend API tests FAILED!")
            print("\nFailed Tests:")
            for result in self.test_results:
                if not result["success"]:
                    print(f"  - {result['test']}: {result['details']}")
            return False

def main():
    """Main test execution"""
    tester = APITester(BACKEND_URL)
    success = tester.run_all_tests()
    
    # Write detailed results to file
    with open('/app/test_results.json', 'w') as f:
        json.dump({
            "timestamp": datetime.now().isoformat(),
            "backend_url": BACKEND_URL,
            "summary": {
                "total_tests": len(tester.test_results),
                "passed": sum(1 for r in tester.test_results if r["success"]),
                "failed": sum(1 for r in tester.test_results if not r["success"])
            },
            "results": tester.test_results
        }, f, indent=2)
    
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())